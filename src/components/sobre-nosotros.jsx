import './sobre-nosotros.css'
import Tecnologia from '../images/Tecnologia.png'
import Money from '../images/Money.png'
import Graph from '../images/Graph.png'
import Zone from '../images/Zone.png'

export function SobreNosotros() {
    return(
        <div>
            <h2 className='sobre__nosotros__title'>¿Por que elegir <strong>Baredes Baires?</strong></h2>
            <div className='sobre__nosotros__container'>
                <div className='sobre__nosotros__container__element'><h2 className='sobre__nosotros__container__element__title'>Tecnologia</h2></div>
                <div className='sobre__nosotros__container__element'>
                    <p className='sobre__nosotros__container__element__text'>Usamos ciencia de datos para desarrollar estrategias, algoritmos y herramientas que nos permiten mejorar tu experiencia al comprar o vender tu casa.</p>
                    <img src={Tecnologia} alt="" className='sobre__nosotros__container__image'/>
                    <h3 className='sobre__nosotros__container__element__subtitle'>Valuacion</h3>
                    <div className='sobre__nosotros__container__element__subitem'>
                        <img src={Money} alt="" className='sobre__nosotros__container__element__image'/>
                        <p className='sobre__nosotros__container__element__subtext'>Nuestro algoritmo nos permite determinar en minutos cuál es el precio en el mercado de las propiedades, analizando las caracteristicas tanto del inmueble, como de la oferta de la zona</p>
                    </div>
                    <h3 className='sobre__nosotros__container__element__subtitle'>Datos Personalizados</h3>
                    <div className='sobre__nosotros__container__element__subitem'>
                        <img src={Graph} alt="" className='sobre__nosotros__container__element__image'/>
                        <p className='sobre__nosotros__container__element__subtext'>Te mantenemos informado sobre los movimientos relevantes alrededor de tu propiedad, como visitas y ofertas, a traves de reportes periodicos</p>
                    </div>
                    <h3 className='sobre__nosotros__container__element__subtitle'>Zonas trendy</h3>
                    <div className='sobre__nosotros__container__element__subitem'>
                        <img src={Zone} alt="" className='sobre__nosotros__container__element__image'/>
                        <p className='sobre__nosotros__container__element__subtext'>Analizamos las tendencias del mercado para determinar las mejores zonas para vivir en Buenos Aires</p>
                    </div>
                </div>
            </div>
            <div className='sobre__nosotros__container'>
                <div className='sobre__nosotros__container__element'><h2 className='sobre__nosotros__container__element__title'>Servicio</h2></div>
                <div className='sobre__nosotros__container__element'>
                    <p className='sobre__nosotros__container__element__text'>Contamos con un equipo de expertos en el sector que te brindará un servicio integral, acompañándote en cada paso del proceso y asesorándote en todo momento.</p>
                    <img src={Tecnologia} alt="" className='sobre__nosotros__container__image'/>
                    <h3 className='sobre__nosotros__container__element__subtitle'>Asesores expertos</h3>
                    <div className='sobre__nosotros__container__element__subitem'>
                        <img src={Money} alt="" className='sobre__nosotros__container__element__image'/>
                        <p className='sobre__nosotros__container__element__subtext'>Nuestros consultores seran los aliados estrategicos que te acompañaran y guiaran durante todo el proceso de compra y venta</p>
                    </div>
                    <h3 className='sobre__nosotros__container__element__subtitle'>Asesoria Legal</h3>
                    <div className='sobre__nosotros__container__element__subitem'>
                        <img src={Graph} alt="" className='sobre__nosotros__container__element__image'/>
                        <p className='sobre__nosotros__container__element__subtext'>Nuestro equipo legal verifica la situacion juridica de las propiedades y te asesora durante la forma del contrato y escrituracion de tu casa</p>
                    </div>
                    <h3 className='sobre__nosotros__container__element__subtitle'>Orientacion integral</h3>
                    <div className='sobre__nosotros__container__element__subitem'>
                        <img src={Zone} alt="" className='sobre__nosotros__container__element__image'/>
                        <p className='sobre__nosotros__container__element__subtext'>Absorbemos el proceso operativo que requiere vender o comprar una casa y te mantenemos infrmado para que tu no te preocupes por nada</p>
                    </div>
                </div>
            </div>
            <div className='sobre__nosotros__container'>
                <div className='sobre__nosotros__container__element'><h2 className='sobre__nosotros__container__element__title'>Herramientas de venta</h2></div>
                <div className='sobre__nosotros__container__element'>
                    <p className='sobre__nosotros__container__element__text'>Nuestro equipo trabaja de manera constante para brindarte los recursos que faciliten la venta de tu propiedad o la selección de tu nueva casa.</p>
                    <img src={Tecnologia} alt="" className='sobre__nosotros__container__image'/>
                    <h3 className='sobre__nosotros__container__element__subtitle'>Fotografias profesionales</h3>
                    <div className='sobre__nosotros__container__element__subitem'>
                        <img src={Money} alt="" className='sobre__nosotros__container__element__image'/>
                        <p className='sobre__nosotros__container__element__subtext'>Muestran la propiedad de forma atractiva y realista</p>
                    </div>
                    <h3 className='sobre__nosotros__container__element__subtitle'>Asesoria Legal</h3>
                    <div className='sobre__nosotros__container__element__subitem'>
                        <img src={Graph} alt="" className='sobre__nosotros__container__element__image'/>
                        <p className='sobre__nosotros__container__element__subtext'>Nuestro equipo legal verifica la situacion juridica de las propiedades y te asesora durante la forma del contrato y escrituracion de tu casa</p>
                    </div>
                    <h3 className='sobre__nosotros__container__element__subtitle'>Orientacion integral</h3>
                    <div className='sobre__nosotros__container__element__subitem'>
                        <img src={Zone} alt="" className='sobre__nosotros__container__element__image'/>
                        <p className='sobre__nosotros__container__element__subtext'>Absorbemos el proceso operativo que requiere vender o comprar una casa y te mantenemos infrmado para que tu no te preocupes por nada</p>
                    </div>
                </div>
            </div>
        </div>
    )
}