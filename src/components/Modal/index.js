import './Modal.css';
import { IoCloseCircleOutline } from "react-icons/io5";
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
                <button className="close__button" onClick={onClose}>
                    <IoCloseCircleOutline className='close__icon'/>
                </button>
              <h1>EDITAR CARD:</h1>
              <Form/>
    
            </dialog>
            </div>
    )
       
}

export default Modal;