import React, { useRef, KeyboardEvent } from 'react'
import styles from './Search.module.scss'

interface Props {
  onSearch: (value: string) => void
  placeholder?: string
}

const Search: React.FC<Props> = ({ onSearch, placeholder }) => {
  const searchRef = useRef<HTMLInputElement>(null)

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSearch(searchRef.current?.value ?? '')
    }
  }

  return (
    <form>
      <label className="sr-only" htmlFor="search">
        Search
      </label>
      <input
        ref={searchRef}
        className={`${
          styles.search as string
        } w-full h-[3rem] sm:h-[4rem] bg-[#F4F4F4] dark:bg-[#1F1F1F] pl-[1.5rem] dark:text-white pr-[3rem] max-h-[64px] rounded-[1rem] focus:outline-none focus:ring-2 caret-purple font-bold focus:ring-purple focus:border-transparent`}
        id="search"
        type="text"
        placeholder={placeholder?.length != null ? placeholder : 'Search'}
        onKeyDown={(event) => {
          handleSearch(event)
        }}
      />
    </form>
  )
}

export default Search
