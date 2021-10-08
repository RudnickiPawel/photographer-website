import './main.css';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;