import Navigation from "./sections/navbar/navigation.tsx"
import Mainhero from "./sections/hero/mainhero.tsx"
import FeatureDev from "./sections/featureDev/featureDev.tsx"

function App() {


  return (
    <>
      <header className="sticky top-0 z-50">
        <Navigation />
      </header>
      <main>
        <Mainhero />
        <FeatureDev/>
          <div id="about"></div>
      </main>
    </>
  )
}

export default App
