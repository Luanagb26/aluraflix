import './Button.css'

const Button = (props) => {
    return(
            <a className={`button ${props.isActive ? 'button--active' : ''}`}>{props.nome}</a>
    )
}

export default Button;