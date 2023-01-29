interface ErrorFallbackProps {
  error: Error
  componentStack: string
  resetErrorBoundary: () => void
}

function ErrorFallback({
  error,
  componentStack,
  resetErrorBoundary
}: ErrorFallbackProps): JSX.Element {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <pre>{componentStack}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  )
}

export default ErrorFallback
