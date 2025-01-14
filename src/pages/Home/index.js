import Banner from '../../components/Banner';
import Footer from '../../components/Footer'
import Modal from '../../components/Modal';
import Section from '../../components/Section';
import { useState } from 'react';
import db from '../../json/db.json';

export default function Home() {

  const categorias = [
    {
      nome: "FRONT END",
      cor: 'rgba(107, 209, 255, 1)',
    },
    {
      nome: "BACK END",
      cor: 'rgba(0, 200, 111, 1)',
    },
    {
      nome: "MOBILE",
      cor: 'rgba(255, 186, 5, 1)',
    },
  ]
  const [videos, setVideos] = useState(db.videos)


  const aoNovoVideoAdicionado = (video) => {
    setVideos([...videos, video])
  }

  return (
    <div className="App">
      <Banner
        categoria='FRONT END'
        titulo='SEO com React'
        descricao='Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma Pokedex!'
        imagem='https://www.youtube.com/embed/c8mVlakBESE?si=bzIbBjtGbNW7Fhx3&amp;controls=0'
        url='https://www.youtube.com/embed/c8mVlakBESE?si=bzIbBjtGbNW7Fhx3&amp;controls=0'
      />
      {categorias.map((categoria) => {
        const videosFiltrados = videos.filter(
          (video) =>
            video.categoria.trim().toLowerCase() === categoria.nome.trim().toLowerCase()
        );
        console.log(`Categoria: ${categoria.nome}`, videosFiltrados);
        return (
          <Section
            key={categoria.nome}
            nome={categoria.nome}
            cor={categoria.cor}
            videos={videosFiltrados}
          />
        );
      })}

      <Footer />
      <Modal />
    </div>
  );
}