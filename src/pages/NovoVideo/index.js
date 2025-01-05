import Input from '../../components/Input';
//import ListaSupensa from '../../components/ListaSuspensa'
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import './NovoVideo.css';

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
                {/*<ListaSupensa placeholder="Selecione uma categoria" label = "Categoria"></ListaSupensa>*/}
                <Input placeholder="Insira a url da imagem">Imagem</Input>
                <Input placeholder="Insira a url do vídeo">Vídeo</Input>
                <TextArea placeholder="Sobre o que é esse vídeo?">Descrição</TextArea>
           </div>
           <div>
               <Button nome="GUARDAR"/>
               <Button nome ="LIMPAR"/>
           </div>
           </form>
        </main>
    )
}