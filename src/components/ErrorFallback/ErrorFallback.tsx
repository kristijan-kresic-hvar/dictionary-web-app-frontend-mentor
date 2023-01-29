import sadSVG from '@/assets/icons/sad.svg'

interface ErrorFallbackProps {
  componentStack: string
  resetErrorBoundary: () => void
}

function ErrorFallback({
  componentStack,
  resetErrorBoundary
}: ErrorFallbackProps): JSX.Element {
  return (
    <div
      role="alert"
      className="w-full flex flex-col justify-center items-center my-[4.25rem]">
      <img src={sadSVG} alt="sad" className="w-[4rem] mb-[2.75rem]" />
      <h4 className="font-bold leading-[1.5rem] text-[1.25rem] mb-[1.5rem] dark:text-white">
        No Definitions Found
      </h4>
      <p className="text-[1.13rem] leading-[1.5rem] text-center text-[#757575] mb-[1.5rem]">
        Sorry pal, we couldn&apos;t find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </p>
      <button
        type="button"
        className="text-purple text-[1.13rem]"
        onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  )
}

export default ErrorFallback
