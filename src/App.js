import './App.css';
import About from './components/About';
import Info from './components/Info';
import Menubar from './components/Menubar';
import Projects from './components/Projects';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
      <Menubar />
      <Info />
      <Social />
      <Projects />
      <About />
    </div>
  );
}

export default App;
