import './Card.css'

const Card = ({url,cor}) => {

    return(

        <div className='card'>
            <iframe
                style={{border:`solid ${cor}`, boxShadow: `0px 0px 17px 8px ${cor} inset`}}
                src={url}
            />

             <div className='card__button__container' style={{border:`5px, 5px, 5px, 5px solid ${cor}`, boxShadow: `0px -4px 5px 3px ${cor} inset`}}>
                    <button className='button__card'>
                        <img src='/assets/icon__trash.png' alt='Icone Lixeira'/>
                        DELETAR
                    </button>
                    <button className='button__card'>
                        <img src='/assets/icon__edit.png' alt='Icone Editar'/>
                        EDITAR
                    </button>
                    </div>
        </div>
    )
}

export default Card;