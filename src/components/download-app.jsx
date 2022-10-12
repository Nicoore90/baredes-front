import './download-app.css'
import Cellphones from '../images/Cellphones.png'

export function DownloadApp() {
    return(
        <div>
            <div className='download__app__container'>
                <div className='download__app'>
                    <h2 className='download__app__title'>Como bajarte la APP</h2>
                    <p className='download__app__text'>¡Seguí los pasos y accedé a nuestra aplicación!</p>
                    <div>
                        <div>
                            <div className='download__app__list__container'>
                                <div className='download__app__buttons'>
                                    <button>Android</button>
                                    <button>Ios</button>
                                    <ul className='download__app__list'>
                                        <li><p className='numbers'>1-</p><p className='list__text'>Pulsar el botón de ajustes (los tres puntitos de arriba a la derecha).</p></li>
                                        <li><p className='numbers'>2-</p><p className='list__text'>En el menú hay que buscar, y pulsar, 'Añadir a pantalla de inicio'.</p></li>
                                        <li><p className='numbers'>3-</p><p className='list__text'>Solo queda pulsar en 'añadir' para terminar la operación.</p></li>
                                    </ul>
                                </div>
                                <img src={Cellphones} alt="" className='download__app__image'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}