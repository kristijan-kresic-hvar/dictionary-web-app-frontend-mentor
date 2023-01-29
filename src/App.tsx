import { Suspense, useState, useRef, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '@/components/ErrorFallback/ErrorFallback'
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import Loader from '@/components/Loader'
import Dictionary from '@/components/Dictionary/Dictionary'

function App(): JSX.Element {
  const searchRef = useRef<HTMLInputElement>(null)

  const [query, setQuery] = useState<string>('keyboard')
  const [queryError, setQueryError] = useState<boolean>(false)

  const onSearch = (value: string): void => {
    setQuery(value)
  }

  const loaderComponent = (
    <div className="flex justify-center mt-16">
      <Loader />
    </div>
  )

  useEffect(() => {
    if (searchRef.current != null) {
      searchRef.current.value = query
    }
  }, [query])

  return (
    <div className="dark:bg-[#050505] bg-white w-full h-full transition-bg ease-in-out duration-200 delay-100">
      <main className="container">
        <div className="pt-[1.5rem] sm:pt-[3.6rem]">
          <Navbar />
        </div>
        <div className="mt-[3.13rem]">
          <Search
            onSearch={onSearch}
            ref={searchRef}
            error={queryError}
            placeholder="Enter a word and press enter..."
          />
        </div>
        <ErrorBoundary
          onError={() => {
            setQueryError(true)
          }}
          FallbackComponent={ErrorFallback as React.FC}
          onReset={() => {
            setQuery('')
            setQueryError(false)
            if (searchRef.current != null) {
              searchRef.current.value = ''
            }
          }}>
          <Suspense fallback={loaderComponent}>
            <div className="mt-[2.8rem] pb-[1.5rem] sm:pb-[3.6rem]">
              <Dictionary query={query} />
            </div>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  )
}

export default App
