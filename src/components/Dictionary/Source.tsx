interface SourceProps {
  href: string
}

const Source = ({ href }: SourceProps): JSX.Element => {
  return (
    <>
      <div className="w-full h-[1px] bg-[#E9E9E9] dark:bg-[#3A3A3A] mb-[1.3rem]"></div>
      <div className="flex items-center justify-start w-full">
        <h4 className="leading-[1.06rem] text-[0.9rem] text-[#757575] mr-[1.25rem] border-b border-b-[#757575]">
          Source
        </h4>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={href}
          className="dark:text-white border-b border-b-[#757575] leading-[1.06rem] text-[0.9rem] truncate">
          {href}
        </a>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[0.75rem] h-[0.75rem] ml-[0.63rem]"
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
    </>
  )
}

export default Source
