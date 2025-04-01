
import './App.css'
import {FirstPart} from './components/FirstPart'
import { Footer } from './components/Footer'
import { SecondPart } from './components/SecondPart'
import { ThirdPart } from './components/ThirdPart'
import { DarkModeProvider } from './contexts/DarkModeContext'

function App() {

  return (
    <DarkModeProvider>
      <div>
        <FirstPart />
        <SecondPart />
        <ThirdPart />
        <Footer />
      </div>
    </DarkModeProvider>
  )
}

export default App
