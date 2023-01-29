import { getWordDefinition } from '@/api'
import { useQuery } from '@tanstack/react-query'

import Meaning from './Meaning'
import Source from './Source'

interface DictionaryProps {
  query: string
}

const Dictionary = ({ query }: DictionaryProps): JSX.Element => {
  const response: any = useQuery({
    queryKey: ['dictionary', query],
    queryFn: async () => await getWordDefinition(query),
    refetchOnWindowFocus: false,
    suspense: true,
    cacheTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
    enabled: !(query.length === 0)
  })

  if (response?.isError === true) {
    return <p>an error has occured</p>
  }

  if (response?.data == null) {
    return <></>
  }

  console.log(response?.data)

  return (
    <div>
      <div className="flex justify-between items-center mb-[2.5rem]">
        <div>
          <h1 className="text-[2rem] leading-[2.4rem] sm:text-[4rem] sm:leading-[4.8rem] mb-[0.5rem] dark:text-white">
            {response.data[0].word ?? ''}
          </h1>
          <p className="text-purple font-[400] text-[1.12rem] leading-[1.5rem] sm:text-[1.5rem] sm:leading-[1.8rem]">
            {response.data[0].phonetic ?? ''}
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
      {response.data[0].meanings.map((meaning: any) => (
        <Meaning
          key={meaning.partOfSpeech}
          title={meaning.partOfSpeech}
          list={meaning.definitions}
        />
      ))}
      {response.data[0].sourceUrls.length > 0 && (
        <Source href={response.data[0].sourceUrls[0]} />
      )}
    </div>
  )
}

export default Dictionary
