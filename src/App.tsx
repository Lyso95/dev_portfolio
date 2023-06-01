import Navigation from "./sections/navbar/navigation.tsx"
import Mainhero from "./sections/hero/mainhero.tsx"

function App() {


  return (
    <>
      <header>
        <Navigation />
        <Mainhero />
        <div className="bg-slate-400 h-5 mt-24"></div>
      </header>
    </>
  )
}

export default App
