import './Form.css'
import Input from "../Input";
import TextArea from "../TextArea";
import Select from "../Select"
import { useEffect, useState } from 'react';
import FormButton from '../FormButton';
import {connectApi} from '../../js/connectApi';

const Form = ({ video, onSubmit }) => {

    const [titulo, setTitulo] = useState(video?.titulo || "");
    const [categoria, setCategoria] = useState(video?.categoria || "");
    const [imagem, setImagem] = useState(video?.imagem || "");
    const [url, setUrl] = useState(video?.url || "");
    const [descricao, setDescricao] = useState(video?.descricao || "");

    useEffect(() => {
        if (video) {
            setTitulo(video.titulo || "");
            setCategoria(video.categoria || "");
            setImagem(video.imagem || "");
            setUrl(video.url || "");
            setDescricao(video.descricao || "");
        }
    }, [video]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ id: video.id, titulo, categoria, imagem, url, descricao });
    };

    const handleClean = () => {
        connectApi.cleanForm(setTitulo, setCategoria, setImagem, setUrl, setDescricao);
      };

    return (

        <form onSubmit={handleSubmit}>
            <Input
                placeholder=''
                colorFundo="transparent"
                colorBorda=" 5px solid rgba(107, 209, 255, 1)"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            >
                Título
            </Input>

            <Select
                placeholder=""
                colorFundo="transparent"
                colorBorda=" 5px solid rgba(107, 209, 255, 1)"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            >
                Categoria
            </Select>

            <Input
                placeholder=''
                colorFundo="transparent"
                colorBorda=" 5px solid rgba(107, 209, 255, 1)"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
            >
                Imagem
            </Input>

            <Input
                placeholder=''
                colorFundo="transparent"
                colorBorda=" 5px solid rgba(107, 209, 255, 1)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            >
                Vídeo
            </Input>

            <TextArea
                placeholder=''
                colorFundo="transparent"
                colorBorda=" 5px solid rgba(107, 209, 255, 1)"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            >
                Descrição
            </TextArea>

            <div className='formulario__botao__container'>
                <FormButton type="submit" nome="GUARDAR" />
                <FormButton nome="LIMPAR" onClick={handleClean} />
            </div>

        </form>

    )
}

export default Form;