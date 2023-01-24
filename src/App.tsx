import Navbar from './components/Navbar'

function App(): JSX.Element {
  return (
    <div className="dark:bg-[#050505] bg-white transition-bg ease-in-out duration-200 delay-100">
      <main className="container">
        <Navbar />
      </main>
    </div>
  )
}

export default App
