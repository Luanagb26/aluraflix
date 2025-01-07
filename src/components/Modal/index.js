import './Modal.css';
import Form from '../Form';


const Modal = ({open, onClose}) => {

    if (!open) return null;

    return (
            <div className='overlay'>
            <dialog 
                open 
                className='modal__container'
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose}>x</button>
              <h1>EDITAR CARD:</h1>
              <Form/>
    
            </dialog>
            </div>
    )
       
}

export default Modal;