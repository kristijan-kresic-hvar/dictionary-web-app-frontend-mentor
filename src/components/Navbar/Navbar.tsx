import DropDown from './components/DropDown'
import ThemeToggle from './components/ThemeToggle'
import { handleFontChange } from './utils'

const Navbar = (): JSX.Element => {
  return (
    <nav className="w-full flex justify-between pt-[58px] pb-[51] items-center">
      <section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="auto"
          viewBox="0 0 34 38">
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#838383"
            strokeLinecap="round"
            strokeWidth="1.5">
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
      </section>
      <section className="flex justify-between items-center gap-3">
        <DropDown
          options={[
            {
              label: 'Sans Serif',
              value: 'sansserif'
            },
            {
              label: 'Serif',
              value: 'serif'
            },
            {
              label: 'Mono',
              value: 'mono'
            }
          ]}
          onOptionChange={(value) => {
            handleFontChange(value)
          }}
        />
        <div className="w-[2px] h-[32px] bg-[#979797] opacity-50"></div>
        <ThemeToggle />
      </section>
    </nav>
  )
}

export default Navbar
