import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FreelanceSection from '../components/FreelanceSection'
import SolutionsSection from '../components/SolutionsSection'
import ApprochSection from '../components/ApprochSection'
import ContactSection from '../components/ContactSection'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FreelanceSection />
        <SolutionsSection />
        <ApprochSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App 