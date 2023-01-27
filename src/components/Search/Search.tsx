import React, { useRef, KeyboardEvent, useState } from 'react'
import styles from './Search.module.scss'

interface Props {
  onSearch: (value: string) => void
  placeholder?: string
}

const Search: React.FC<Props> = ({ onSearch, placeholder }) => {
  const searchRef = useRef<HTMLInputElement>(null)

  const [hasError, setHasError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault()

      if (searchRef.current?.value === '') {
        setHasError(true)
        setErrorMessage('Whoops, can’t be empty…')
        return
      }

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
        className={`${styles.search as string} w-full h-[3rem] sm:h-[4rem] ${
          hasError ? 'ring-[#FF5252] ring-2' : 'focus:ring-purple focus:ring-2'
        } bg-[#F4F4F4] dark:bg-[#1F1F1F] pl-[1.5rem] dark:text-white pr-[3rem] max-h-[64px] rounded-[1rem] focus:outline-none caret-purple font-bold focus:border-transparent`}
        id="search"
        type="text"
        placeholder={placeholder?.length != null ? placeholder : 'Search'}
        onKeyDown={(event) => {
          setHasError(false)
          setErrorMessage('')
          handleSearch(event)
        }}
      />
      {hasError && (
        <p className="text-[#FF5252] pt-[0.5rem] text-[0.9rem] leading-[1rem] sm:text-[1.25rem] sm:leading-[1.5rem]">
          {errorMessage}
        </p>
      )}
    </form>
  )
}

export default Search
