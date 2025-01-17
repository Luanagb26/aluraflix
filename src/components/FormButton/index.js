import './FormButton.css'

const FormButton = (props) => {
    return(
        <div>
            < button className={`formButton ${props.isActive ? 'formButton--active' : ''}`}>{props.nome}</button>
        </div>
    )
}

export default FormButton;