import './App.css';
import Header from './components/Header/Header';
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import ShortIntro from "./components/Short-Intro/ShortIntro";

function App() {
  return (
    <div className="App">
      <Header />
      <ShortIntro />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
