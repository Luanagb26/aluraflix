import './Input.css'

const Input = ({children, placeholder, type = "text", colorFundo = `rgba(25, 25, 25, 1)`, colorBorda = `3px solid rgba(38, 38, 38, 1)` }) => {
    return(
        <div className='input'>
        <label className='input__label'>{children}</label>
        <input placeholder={placeholder} required type={type} style={{backgroundColor: `${colorFundo}`, border: `${colorBorda}`}}/>
        </div>
    )
};

export default Input;