import './Input.css'

const Input = ({children, placeholder, type = "text"}) => {
    return(
        <div className='input'>
        <label className='input__label'>{children}</label>
        <input placeholder={placeholder} type={type}/>
        </div>
    )
};

export default Input;