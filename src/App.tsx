import Hero from "./components/Hero";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full" style={{ background: 'radial-gradient(circle at 50% 50%, #1a1040, #0d0d1a)' }}>
        <Header/>
        <Hero/>
        <Projects/>
       <Contact/>
    </div>
  )
}

export default App


