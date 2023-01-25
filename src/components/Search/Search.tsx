import React, { useState } from 'react'
import styles from './Search.module.scss'

interface Props {
  onSearch: (value: string) => void
  placeholder?: string
}

const Search: React.FC<Props> = ({ onSearch, placeholder }) => {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onSearch(searchValue)
  }

  return (
    <form onSubmit={handleSearch}>
      <label className="sr-only" htmlFor="search">
        Search
      </label>
      <input
        className={`${styles.search} w-full h-[4rem] bg-[#F4F4F4] dark:bg-[#1F1F1F] pl-[1.5rem] dark:text-white pr-[3rem] max-h-[64px] rounded-[1rem] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
        id="search"
        type="text"
        placeholder={placeholder?.length != null ? placeholder : 'Search'}
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
        }}
      />
    </form>
  )
}

export default Search
