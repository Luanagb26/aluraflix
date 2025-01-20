import './FormButton.css'

const FormButton = ({type, isActive, nome, onClick}) => {
    return(
        <div>
            < button 
            className={`formButton ${isActive ? 'formButton--active' : ''}`}
            type={type}
            onClick={onClick}
            >
                {nome}
            </button>
        </div>
    )
}

export default FormButton;