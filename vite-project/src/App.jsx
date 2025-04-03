
import './App.css'
import {FirstPart} from './components/FirstPart'
import { Footer } from './components/Footer'
import { SecondPart } from './components/SecondPart'
import { ThirdPart } from './components/ThirdPart'
import { DarkModeProvider } from './contexts/DarkModeContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LanguageProvider } from './contexts/LanguageContext'





const queryClient = new QueryClient();


function App() {

  return (
    <DarkModeProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <FirstPart />
          <SecondPart />
          <ThirdPart />
          <Footer />
        </QueryClientProvider>
      </LanguageProvider>
    </DarkModeProvider>
  )
}

export default App
