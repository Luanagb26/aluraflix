import './TextArea.css';

const TextArea = ({children, placeholder}) => {
    return(
        <div className='textArea'>
            <label className='textArea__label'>{children}</label>
            <textarea placeholder={placeholder}></textarea>
        </div>
    )
}

export default TextArea;