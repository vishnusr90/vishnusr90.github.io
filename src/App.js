import './App.css';
import Header from './components/Header/Header';
import ShortIntro from "./components/Short-Intro/ShortIntro";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <Header />
      <ShortIntro />
      <AboutMe />
    </div>
  );
}

export default App;
