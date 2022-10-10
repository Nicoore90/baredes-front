import logo from './logo.svg';
import './App.css';
import {Hero} from './components/hero';
import { Destacadas } from './components/destacadas';

function App() {
  return (
    <div className="App">
      <Hero />
      <Destacadas />
    </div>
  );
}

export default App;
