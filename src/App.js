import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import {Hero} from './components/hero';
import { Destacadas } from './components/destacadas';
import { Servicios } from './components/servicios'
import {SobreNosotros} from './components/sobre-nosotros'
import {DownloadApp} from './components/download-app'
import {Colaboraciones} from './components/Colaboraciones'
import {Footer} from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Destacadas />
      <Servicios />
      <SobreNosotros />
      <DownloadApp />
      <Colaboraciones />
      <Footer />
    </div>
  );
}

export default App;
