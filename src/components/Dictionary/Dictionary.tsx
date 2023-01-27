const Dictionary = (): JSX.Element => {
  return (
    <div>
      <div className="flex justify-between items-center mb-[2.5rem]">
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
      <div>
        <div className="flex items-center justify-between mb-[2.5rem]">
          <h3 className="italic font-bold text-[1.5rem] pr-[1.25rem] dark:text-white">
            noun
          </h3>
          <div className="w-full h-[1px] bg-[#E9E9E9] mb-1 dark:bg-[#3A3A3A]"></div>
        </div>
        <h3 className="font-[400] text-[1.25rem] text-[#757575] mb-[1.6rem]">
          Meaning
        </h3>
        <ul className="list-disc marker:text-purple ml-[1.4rem] mb-[2.5rem]">
          <li className="pl-[1rem] sm:pl-[1.6rem] pb-[0.8rem] font-[400] leading-[1.5rem] text-[1.13rem] dark:text-white">
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
          <li className="pl-[1rem] sm:pl-[1.6rem] pb-[0.8rem] font-[400] leading-[1.5rem] text-[1.13rem] dark:text-white">
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li className="pl-[1rem] sm:pl-[1.6rem] pb-[0.8rem] font-[400] leading-[1.5rem] text-[1.13rem] dark:text-white">
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>
      </div>
      <div className="mb-[2.5rem]">
        <div className="flex items-center justify-between mb-[2.5rem]">
          <h3 className="italic font-bold text-[1.5rem] pr-[1.25rem] dark:text-white">
            verb
          </h3>
          <div className="w-full h-[1px] bg-[#E9E9E9] mb-1 dark:bg-[#3A3A3A]"></div>
        </div>
        <h3 className="font-[400] text-[1.25rem] text-[#757575] mb-[1.6rem]">
          Meaning
        </h3>
        <ul className="list-disc marker:text-purple ml-[1.4rem] mb-[2.5rem]">
          <li className="pl-[1rem] sm:pl-[1.6rem] pb-[0.8rem] font-[400] leading-[1.5rem] text-[1.13rem] dark:text-white">
            To type on a computer keyboard.
          </li>
          <li className="marker:text-transparent">
            <span className="block pl-[1rem] sm:pl-[1.6rem] text-[#757575] font-[400] text-[1.13rem]">
              “Keyboarding is the part of this job I hate the most.”
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-[1px] bg-[#E9E9E9] dark:bg-[#3A3A3A] mb-[1.3rem]"></div>
      <div className="flex items-center justify-start w-full">
        <h4 className="leading-[1.06rem] text-[0.9rem] text-[#757575] mr-[1.25rem] border-b border-b-[#757575]">
          Source
        </h4>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.lexico.com/en/definition/keyboard"
          className="dark:text-white border-b border-b-[#757575] leading-[1.06rem] text-[0.9rem] truncate">
          https://www.lexico.com/en/definition/keyboard
        </a>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[0.75rem] h-[0.75rem] ml-[0.63rem]"
            width="14"
            height="14"
            viewBox="0 0 14 14">
            <path
              fill="none"
              stroke="#838383"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default Dictionary
