import './Input.css'

const Input = ({value, onChange, children, placeholder, type = "text", colorFundo = `rgba(25, 25, 25, 1)`, colorBorda = `3px solid rgba(38, 38, 38, 1)` }) => {
    return(
        <div className='input'>
        <label className='input__label'>{children}</label>
        <input 
        placeholder={placeholder} 
        required 
        type={type} 
        style={{backgroundColor: `${colorFundo}`, border: `${colorBorda}`}}
        value={value}
        onChange={onChange}
        />
        </div>
    )
};

export default Input;