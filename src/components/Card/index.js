import { useState } from 'react';
import Modal from '../Modal';
import './Card.css';

const Card = ({id ,url,cor, onDeleteVideo, onEditVideo}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    return(
        <div className='card'>
            <iframe
                style={{border:`solid ${cor}`, boxShadow: `0px 0px 17px 8px ${cor} inset`}}
                src={url}
                key={id}
            />

             <div className='card__button__container' style={{border:`5px, 5px, 5px, 5px solid ${cor}`, boxShadow: `0px -4px 5px 3px ${cor} inset`}}>
                    <button className='button__card' onClick={()=>onDeleteVideo(id)}>
                        <img src='/assets/icon__trash.png' alt='Icone Lixeira'/>
                        DELETAR
                    </button>
                    <button className='button__card' onClick={onEditVideo}>
                        <img src='/assets/icon__edit.png' alt='Icone Editar'/>
                        EDITAR
                    </button>
                    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}/>
                    </div>
        </div>
    )
}

export default Card;