import { Fragment } from 'react'
import { getWordDefinition } from '@/api'
import { useQuery } from '@tanstack/react-query'

import Meaning from './Meaning'
import Source from './Source'
import WordAudio from './WordAudio'

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

  const audioSrc = response.data[0].phonetics.find(
    (phonetic: any) => phonetic.audio.length > 0
  )?.audio

  console.log(response.data[0])

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
        {audioSrc?.length > 0 && <WordAudio audio={audioSrc} />}
      </div>
      {response.data[0].meanings.map((meaning: any, index: number) => (
        <Fragment key={index}>
          <Meaning title={meaning.partOfSpeech} list={meaning.definitions} />
          <div>
            {meaning.synonyms?.length > 0 && (
              <div className="mb-[2.5rem] flex flex-wrap w-full justify-start gap-[1.4rem] items-center">
                <h3 className="font-[400] text-[1rem] sm:text-[1.25rem] text-[#757575]">
                  Synonyms
                </h3>
                <div className="flex justify-start gap-[1.4rem] flex-wrap">
                  {meaning.synonyms.map((synonym: string, index: number) => (
                    <span
                      key={index}
                      className="text-purple font-bold text-[1rem] sm:text-[1.25rem]">
                      {synonym}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Fragment>
      ))}
      {response.data[0].sourceUrls.length > 0 && (
        <Source href={response.data[0].sourceUrls[0]} />
      )}
    </div>
  )
}

export default Dictionary
