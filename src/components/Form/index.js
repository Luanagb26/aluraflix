import './Form.css'
import Input from "../Input";
import TextArea from "../TextArea";
import Select from "../Select"

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

            <Select placeholder="selecione uma categoria">Categoria</Select>

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