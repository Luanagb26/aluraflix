import './Form.css'
import Input from "../Input";
import TextArea from "../TextArea";
import Select from "../Select"
import { useState } from 'react';
import FormButton from '../FormButton';

const Form = ({ video, onSubmit }) => {

    const [titulo, setTitulo] = useState(video?.titulo || "");
    const [categoria, setCategoria] = useState(video?.categoria || "");
    const [imagem, setImagem] = useState(video?.imagem || "");
    const [url, setUrl] = useState(video?.url || "");
    const [descricao, setDescricao] = useState(video?.descricao || "");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ id: video.id, titulo, categoria, imagem, url, descricao });
    };
    return (

        <form onSubmit={handleSubmit}>
            <Input
                placeholder='valorAntigoooo'
                colorFundo="transparent"
                colorBorda=" 5px solid rgba(107, 209, 255, 1)"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            >
                Título
            </Input>

            <Select
                placeholder="selecione uma categoria"
                colorFundo="transparent"
                colorBorda=" 5px solid rgba(107, 209, 255, 1)"
            >
                Categoria
            </Select>

            <Input
                placeholder='valorAntigoooo'
                colorFundo="transparent"
                colorBorda=" 5px solid rgba(107, 209, 255, 1)"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
            >
                Imagem
            </Input>

            <Input
                placeholder='valorAntigoooo'
                colorFundo="transparent"
                colorBorda=" 5px solid rgba(107, 209, 255, 1)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            >
                Vídeo
            </Input>

            <TextArea
                placeholder='valorAntigoooo'
                colorFundo="transparent"
                colorBorda=" 5px solid rgba(107, 209, 255, 1)"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            >
                Descrição
            </TextArea>

            <div className='formulario__botao__container'>
                <FormButton type="submit" nome="GUARDAR" />
                <FormButton nome="LIMPAR" />
            </div>

        </form>

    )
}

export default Form;