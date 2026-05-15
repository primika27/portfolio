import './App.css'
import MainTab from './components/tabs-advanced-3'
function App() {

  return (
    <main className="app-shell">
      <section className="hero-banner">
        <h1 className="hero-title">Welcome to Primika's Portfolio!</h1>
        <p className="hero-description">
          Hi there! I'm Primika, a passionate software developer with a love for creating
          innovative solutions. This portfolio showcases my projects, skills, and
          experiences in the world of technology. Feel free to explore and get in touch if
          you'd like to collaborate or learn more about my work!
        </p>
      </section>
      <MainTab />
    </main>
  )
}

export default App
