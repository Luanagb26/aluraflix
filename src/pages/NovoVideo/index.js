import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import FormButton from '../../components/FormButton';
import './NovoVideo.css';
import Select from '../../components/Select';

export default function NovoVideo(){
    return(
        <main>
           <div className='titulo__container'>
                <h1 className='titulo'>NOVO VÍDEO</h1>
                <p className='subtitulo'>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
           </div>

           <form className='formulario__novoVideo'>
               <div className='formulario__titulo__container'>
                    <h2>CRIAR VIDEO</h2>
               </div>
               
          
           <div className='formulario__campo__container'>
                <Input placeholder="Digite o título">Título</Input>
                <Select placeholder="selecione uma categoria">Categoria</Select>
                <Input placeholder="Insira a url da imagem">Imagem</Input>
                <Input placeholder="Insira a url do vídeo">Vídeo</Input>
                <TextArea placeholder="Sobre o que é esse vídeo?">Descrição</TextArea>
           </div>
           <div className='formulario__botao__container'>
               <FormButton nome="GUARDAR"/>
               <FormButton nome ="LIMPAR"/>
           </div>
           </form>
        </main>
    )
}