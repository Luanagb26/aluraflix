import './Modal.css';
import { IoCloseCircleOutline } from "react-icons/io5";
import Form from '../Form';
import { useState } from 'react';
import updateVideo from '../../js/updateVideo';

const Modal = ({ video, open, onClose, onUpdateSuccess }) => {
    
    if (!open) return null; 

 const handleFormSubmit = async (updatedVideo) => {
    try {
      // Chama o método de atualização da API
      const result = await updateVideo(updatedVideo);

      if (result) {
        alert('Vídeo atualizado com sucesso!');
        onUpdateSuccess(updatedVideo); // Atualiza a lista de vídeos no Home
        onClose(); // Fecha o modal
      } else {
        alert('Erro ao atualizar o vídeo.');
      }
    } catch (error) {
      alert('Ocorreu um erro. Tente novamente.');
    }
  };

    return (
        <div className='overlay'>
            <dialog
                open
                className='modal__container'
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close__button" onClick={onClose}>
                    <IoCloseCircleOutline className='close__icon' />
                </button>
                <h1>EDITAR CARD:</h1>
                <Form video={video} onSubmit={handleFormSubmit} />
            </dialog>
        </div>
    )

}

export default Modal;