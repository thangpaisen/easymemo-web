import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import AppShowcase from './components/AppShowcase'
import Compatibility from './components/Compatibility'
import Privacy from './components/Privacy'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <AppShowcase />
      <Compatibility />
      <Privacy />
      <Download />
      <Footer />
    </div>
  )
}

export default App
