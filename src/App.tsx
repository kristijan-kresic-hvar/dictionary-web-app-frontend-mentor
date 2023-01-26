import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import Dictionary from '@/components/Dictionary'

function App(): JSX.Element {
  const onSearch = (value: string): void => {
    console.log(value)
  }

  return (
    <div className="dark:bg-[#050505] bg-white w-full h-full transition-bg ease-in-out duration-200 delay-100">
      <main className="container">
        <div className="pt-[1.5rem] sm:pt-[3.6rem]">
          <Navbar />
        </div>
        <div className="mt-[3.13rem]">
          <Search
            onSearch={onSearch}
            placeholder="Enter a word and press enter..."
          />
        </div>
        <div className="mt-[2.8rem] pb-[1.5rem] sm:pb-[3.6rem]">
          <Dictionary />
        </div>
      </main>
    </div>
  )
}

export default App
