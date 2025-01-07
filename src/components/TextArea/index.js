import './TextArea.css';

const TextArea = ({children, placeholder, colorFundo = `rgba(25, 25, 25, 1)`, colorBorda = `3px solid  rgba(38, 38, 38, 1)`}) => {
    return(
        <div className='textArea'>
            <label className='textArea__label'>{children}</label>
            <textarea placeholder={placeholder} style={{backgroundColor: `${colorFundo}`, border: `${colorBorda}`}}></textarea>
        </div>
    )
}

export default TextArea;