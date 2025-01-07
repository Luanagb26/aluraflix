import './Form.css'
import Input from "../Input";
import TextArea from "../TextArea";

const Form = () => {
    return(
        
        <form>
            <Input 
            placeholder='valorAntigoooo' 
            colorFundo="transparent" 
            colorBorda=" 5px solid rgba(107, 209, 255, 1)"
            >
                Título
            </Input>

            <select/>

            <Input 
            placeholder='valorAntigoooo' 
            colorFundo="transparent"
            colorBorda=" 5px solid rgba(107, 209, 255, 1)"
             >
                Imagem
            </Input>

            <Input 
            placeholder='valorAntigoooo' 
            colorFundo="transparent" 
            colorBorda=" 5px solid rgba(107, 209, 255, 1)"
            >
                Vídeo
            </Input>

            <TextArea 
            placeholder='valorAntigoooo' 
            colorFundo="transparent" 
            colorBorda=" 5px solid rgba(107, 209, 255, 1)"
            >
                Descrição
            </TextArea>

        </form>
        
    )
}

export default Form;