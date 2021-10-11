import './main.css';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;