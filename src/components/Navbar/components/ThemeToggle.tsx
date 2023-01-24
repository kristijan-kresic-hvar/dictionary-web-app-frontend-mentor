import { useState } from 'react'

const ThemeToggle = (): JSX.Element => {
  const [currentTheme, setCurrentTheme] = useState<string>('light')

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      setCurrentTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setCurrentTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        id="theme-toggle"
        className="sr-only peer"
        onChange={handleThemeChange}
      />
      <div className="w-11 h-5 mr-3 bg-gray-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:bg-white after:left-1 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${
          currentTheme === 'dark' ? 'stroke-purple' : 'stroke-[#838383]'
        }`}
        viewBox="0 0 22 22">
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
      <span className="sr-only">toggle</span>
    </label>
  )
}

export default ThemeToggle
