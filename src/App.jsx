import React from 'react'
import { NavigationProvider, useNavigation } from './context/NavigationContext'
import HomePage from './pages/HomePage'
import QuoteRequestPage from './pages/QuoteRequestPage'

const AppRouter = () => {
  const { currentPage } = useNavigation()

  switch(currentPage) {
    case 'quote':
      return <QuoteRequestPage />
    case 'home':
    default:
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
          <HomePage />
        </div>
      )
  }
}

function App() {
  return (
    <NavigationProvider>
      <AppRouter />
    </NavigationProvider>
  )
}

export default App