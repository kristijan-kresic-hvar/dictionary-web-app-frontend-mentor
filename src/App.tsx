import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import Dictionary from '@/components/Dictionary'

function App(): JSX.Element {
  const onSearch = (value: string): void => {}

  return (
    <div className="dark:bg-[#050505] bg-white transition-bg ease-in-out duration-200 delay-100">
      <main className="container">
        <Navbar />
        <div className="mt-[3.13rem]">
          <Search
            onSearch={onSearch}
            placeholder="Enter a word and press enter..."
          />
        </div>
        <div className="mt-[2.8rem]">
          <Dictionary />
        </div>
      </main>
    </div>
  )
}

export default App
