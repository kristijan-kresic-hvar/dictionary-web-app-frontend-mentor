import { Fragment } from 'react'

interface MeaningProps {
  title: string
  list: string[]
}

const Meaning = ({ title, list }: MeaningProps): JSX.Element => {
  return (
    <div className="mb-[2.5rem]">
      <div className="flex items-center justify-between mb-[2.5rem]">
        <h3 className="italic font-bold text-[1.13rem] sm:text-[1.5rem] pr-[1.25rem] dark:text-white">
          {title}
        </h3>
        <div className="w-full h-[1px] bg-[#E9E9E9] mb-1 dark:bg-[#3A3A3A]"></div>
      </div>
      <h3 className="font-[400] text-[1rem] sm:text-[1.25rem] text-[#757575] mb-[1.6rem]">
        Meaning
      </h3>
      <ul className="list-disc marker:text-purple ml-[1.4rem] mb-[2.5rem]">
        {list.map((item: any, index: number) => (
          <Fragment key={index}>
            <li className="pl-[1rem] mb-[0.8rem] last:mb-[0rem] sm:pl-[1.6rem] pb-[0.8rem] font-[400] leading-[1.5rem] text-[0.94rem] sm:text-[1.13rem] dark:text-white">
              {item.definition}
              {item.example?.length > 0 && (
                <span className="mt-[0.8rem] block text-[#757575] font-[400] text-[0.94rem] sm:text-[1.13rem]">
                  {item.example}
                </span>
              )}
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  )
}

export default Meaning
