const Dictionary = (): JSX.Element => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[2rem] leading-[2.4rem] sm:text-[4rem] sm:leading-[4.8rem] mb-[0.5rem] dark:text-white">
            keyboard
          </h1>
          <p className="text-purple font-[400] text-[1.12rem] leading-[1.5rem] sm:text-[1.5rem] sm:leading-[1.8rem]">
            /ˈkiːbɔːd/
          </p>
        </div>
        <button type="button">
          <span className="sr-only">Play out loud</span>
          <svg
            className="group w-[48px] h-[48px] sm:w-[75px] sm:h-[75px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 75 75">
            <g fill="#A445ED" fillRule="evenodd">
              <circle
                className="opacity-[0.25] sm:group-hover:opacity-[1] transition-opacity ease-in-out duration-200 delay-50"
                cx="37.5"
                cy="37.5"
                r="37.5"
              />
              <path
                d="M29 27v21l21-10.5z"
                className="sm:group-hover:fill-white"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Dictionary
