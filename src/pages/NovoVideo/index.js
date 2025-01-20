import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import FormButton from '../../components/FormButton';
import './NovoVideo.css';
import Select from '../../components/Select';
import { useState } from 'react';
import createVideo from '../../js/createVideo';
import { connectApi } from '../../js/connectApi';

export default function NovoVideo() {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState('');
    const [url, setUrl] = useState('');
    const [descricao, setDescricao] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        createVideo(titulo, categoria, imagem, url, descricao);
    };

     const handleClean = () => {
            connectApi.cleanForm(setTitulo, setCategoria, setImagem, setUrl, setDescricao);
          };
    

        return (
            <main>
                <div className='titulo__container'>
                    <h1 className='titulo'>NOVO VÍDEO</h1>
                    <p className='subtitulo'>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
                </div>

                <form onSubmit={handleSubmit} className='formulario__novoVideo' data-form>
                    <div className='formulario__titulo__container'>
                        <h2>CRIAR VIDEO</h2>
                    </div>


                    <div className='formulario__campo__container'>
                        <Input
                            placeholder="Digite o título"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        >
                            Título
                        </Input>

                        <Select
                            placeholder="selecione uma categoria"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            Categoria
                        </Select>

                        <Input
                            placeholder="Insira a url da imagem"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                        >
                            Imagem
                        </Input>

                        <Input
                            placeholder="Insira a url do vídeo"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        >
                            Vídeo
                        </Input>

                        <TextArea
                            placeholder="Sobre o que é esse vídeo?"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        >
                            Descrição
                        </TextArea>
                    </div>
                    <div className='formulario__botao__container'>
                        <FormButton type="submit" nome="GUARDAR" />
                        <FormButton nome="LIMPAR" onClick={handleClean}/>
                    </div>
                </form>
            </main>
        )
    }

