import './Card.css'

const Card = ({url,cor}) => {

    return(
        <div className='card' style={{border:`solid ${cor}`, boxShadow: `0px -4px 5px 3px ${cor} inset`}}>
            <iframe
                src={url}
            />
             <div className='button__container' style={{border:`0px, 5px, 5px, 5px solid ${cor}`, boxShadow: `0px -4px 5px 3px ${cor} inset`}}>
                    <button>
                        <img src='/assets/icon__trash.png' alt='Icone Lixeira'/>
                        DELETAR
                    </button>
                    <button>
                        <img src='/assets/icon__edit.png' alt='Icone Editar'/>
                        EDITAR
                    </button>
                    </div>
        </div>
    )
}

export default Card;