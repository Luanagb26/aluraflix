import './Button.css'

const Button = ({nome, isActive ,children}) => {
    return(
            < button className={`button ${isActive ? 'button--active' : ''}`}>
                {children}
                <p>{nome}</p>
            </button>
    )
}

export default Button;