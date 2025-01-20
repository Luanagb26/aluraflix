import Banner from '../../components/Banner';
import Footer from '../../components/Footer'
import Modal from '../../components/Modal';
import Section from '../../components/Section';
import { useState } from 'react';
import { categorias } from '../../context/categorias';
import { useEffect } from 'react';
import { connectApi } from "../../js/connectApi";
import deleteVideo from '../../js/deleteVideo';

export default function Home() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); // Vídeo selecionado para edição
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      const response = await connectApi.listVideos();
      setVideos(response);
    }

    fetchVideos();
  }, []);

  const handleDeleteVideo = async (id) => {
    await deleteVideo(id);

    // Atualiza o estado local removendo o vídeo deletado
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
  };

  const handleUpdateSuccess = (updatedVideo) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
  };

  const openEditModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };


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
            video.categoria === categoria.nome
        );
        return (
          <Section
            key={categoria.nome}
            nome={categoria.nome}
            cor={categoria.cor}
            videos={videosFiltrados}
            onDeleteVideo={handleDeleteVideo}
            onEditVideo={openEditModal}
          />
        );
      })}

      <Footer />
      <Modal 
       video={selectedVideo}
       open={isModalOpen}
       onClose={closeEditModal}
       onUpdateSuccess={handleUpdateSuccess}
      />
    </div>
  );
}

