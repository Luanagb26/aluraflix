import './Button.css'

const Button = (props) => {
    return(
            <a className='button'>{props.nome}</a>
    )
}

export default Button;