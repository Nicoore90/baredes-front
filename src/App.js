import logo from './logo.svg';
import './App.css';
import {Hero} from './components/hero';
import { Destacadas } from './components/destacadas';
import { Servicios } from './components/servicios'
import {SobreNosotros} from './components/sobre-nosotros'
import {DownloadApp} from './components/download-app'
import {Colaboraciones} from './components/Colaboraciones'

function App() {
  return (
    <div className="App">
      <Hero />
      <Destacadas />
      <Servicios />
      <SobreNosotros />
      <DownloadApp />
      <Colaboraciones />
    </div>
  );
}

export default App;
