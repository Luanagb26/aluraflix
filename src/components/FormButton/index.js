import './FormButton.css'

const FormButton = ({type, isActive, nome}) => {
    return(
        <div>
            < button 
            className={`formButton ${isActive ? 'formButton--active' : ''}`}
            type={type}
            >
                {nome}
            </button>
        </div>
    )
}

export default FormButton;