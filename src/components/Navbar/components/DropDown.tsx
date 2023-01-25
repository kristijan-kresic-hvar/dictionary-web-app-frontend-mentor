import { useState, useRef, useEffect } from 'react'

interface DropDownOption {
  label: string
  value: string
}
interface DropDownProps {
  options: DropDownOption[]
  onOptionChange?: (optionValue: string) => void
}

const DropDown = ({ options, onOptionChange }: DropDownProps): JSX.Element => {
  const dropDownRef = useRef<HTMLDivElement>(null)

  const [selected, setSelected] = useState<DropDownOption>(options[0])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOptionChange = (option: DropDownOption): void => {
    setSelected(option)
    setIsOpen(false)
    onOptionChange?.(option.value)
  }

  useEffect(() => {
    const handleOutsideClick = (
      e: MouseEvent | TouchEvent | PointerEvent
    ): void => {
      if (
        (dropDownRef.current != null) &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <div className="relative" ref={dropDownRef}>
      <button
        className="group flex items-center text-sm font-bold text-gray-900 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
        type="button"
        onClick={() => {
          setIsOpen((prevState) => !prevState)
        }}>
        <span className="sr-only">Open dropdown menu</span>
        {selected.label}
        <svg
          className="w-4 h-4 mx-1.5 group-hover:fill-purple dark:fill-white"
          aria-hidden="true"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"></path>
        </svg>
      </button>

      <div
        className={`z-10 ${
          !isOpen ? 'hidden' : 'block'
        } bg-white divide-y divide-gray-100 rounded-[1rem] w-44 dark:bg-[#1F1F1F] absolute right-0 top-8 shadow-dropdown dark:shadow-dropdowndark`}>
        <ul className="py-2 text-sm">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                handleOptionChange(option)
              }}>
              <p className="block dark:text-white hover:text-purple dark:hover:text-purple cursor-pointer px-4 py-2 font-bold">
                {option.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DropDown
