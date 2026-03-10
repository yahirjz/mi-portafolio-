import Hero from "./components/Hero";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className=" min-h-screen flex flex-col w-full relative justify-center">
        <Header/>
        <Hero/>
        <Projects/>
    </div>
  )
}

export default App


