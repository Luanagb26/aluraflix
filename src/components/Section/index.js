import Card from '../Card';
import './Section.css'


const Section = ({nome, cor,url}) => {
    return(
        <section className='section'>
            <h3 style={{backgroundColor:`${cor}`}}>
                {nome}
            </h3>
            <div className='video__container'>
               <Card
               key={nome}
               cor={cor}
               />
            </div>
        </section>
    )
}

export default Section;