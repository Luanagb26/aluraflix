import Card from "../Card";
import Slider from "react-slick";
import "./Section.css";

const Section = ({ nome, cor, videos, onDeleteVideo, onEditVideo }) => {

  // Configurações do Slick
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Exibe 3 vídeos ao mesmo tempo
    slidesToScroll: 1, // Avança 1 vídeo de cada vez
    arrows: false,
    centerMode: false,
    variableWiidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, // Exibe 2 vídeos para telas médias
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Exibe 1 vídeo para telas pequenas
        },
      },
    ],
  };
  return (
    <section className="section">
      <h3 style={{ backgroundColor: cor }}>{nome}</h3>
      <div className="video__container">
        {videos.length > 0 ? (
          <Slider {...settings}>
            {videos.map((video) => (
              <Card key={video.id} {...video} cor={cor} onDeleteVideo={onDeleteVideo} onEditVideo={() => onEditVideo(video)} />
            ))}
          </Slider>
        ) : (
          <p className="empty-message">Nenhum vídeo encontrado nesta categoria.</p>
        )}
      </div>
    </section>
  );
};

export default Section;
