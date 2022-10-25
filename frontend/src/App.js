import "./App.css";
import Navi from "./components/Nav/Navi";
import Footer from './components/Footer/Footer.js';
import Hero from './components/Hero/Hero.js'

function App() {
  return (
    <div className="App">
      <Navi />
      <header className="App-header">
        <Hero />
      </header>
      <Footer />
    </div>
  );
}

export default App;
