import { useState, useEffect } from 'react'

interface WordAudioProps {
  audio: string
}

const WordAudio = ({ audio }: WordAudioProps): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioObj, setAudioObj] = useState<HTMLAudioElement | null>(
    new Audio(audio)
  )

  const handlePlay = (): void => {
    void audioObj?.play()
    setIsPlaying(true)
  }

  useEffect(() => {
    audioObj?.addEventListener('ended', () => {
      setIsPlaying(false)
    })

    return () => {
      audioObj?.removeEventListener('ended', () => {
        setIsPlaying(false)
      })
    }
  }, [audioObj])

  useEffect(() => {
    setAudioObj(new Audio(audio))
  }, [audio])

  return (
    <button
      onClick={handlePlay}
      type="button"
      disabled={isPlaying}
      className={`${isPlaying ? 'opacity-50 pointer-events-none' : ''}`}>
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
          <path d="M29 27v21l21-10.5z" className="sm:group-hover:fill-white" />
        </g>
      </svg>
    </button>
  )
}

export default WordAudio
