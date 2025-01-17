import './Button.css'

const Button = (props) => {
    return(
            < button className={`button ${props.isActive ? 'button--active' : ''}`}>{props.nome}</button>
    )
}

export default Button;