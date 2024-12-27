import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer'
import Section from './components/Section';
import { useState } from 'react';

function App() {
  const categorias = [
    {
      nome: 'FRONT END',
      cor:'rgba(107, 209, 255, 1)',
    },
    {
      nome: 'BACK END',
      cor: 'rgba(0, 200, 111, 1)',
    },
    {
      nome: 'MOBILE',
      cor:'rgba(255, 186, 5, 1)',
    },
  ]
  const [videos, setVideos] = useState([])

  const aoNovoVideoAdicionado = (video) => {
    setVideos([... videos, video])
  }

  return (
    <div className="App">
      <Header/>
      <Banner 
      categoria='FRONT END'
      titulo='SEO com React'
      descricao='Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma Pokedex!'
      imagem='https://www.youtube.com/embed/c8mVlakBESE?si=bzIbBjtGbNW7Fhx3&amp;controls=0'
      url='https://www.youtube.com/embed/c8mVlakBESE?si=bzIbBjtGbNW7Fhx3&amp;controls=0'
      />
      {categorias.map(categoria => <Section
                                    key={categoria.nome}
                                    nome={categoria.nome}
                                    cor={categoria.cor}
                                    videos={videos.filter(video => video.categoria == categoria.nome)}
                                    />)}
      <Footer/>
    </div>
  );
}

export default App;
