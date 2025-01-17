import Card from "../Card";
import "./Section.css";

const Section = ({ nome, cor, videos }) => {
  console.log(`Section: ${nome}`, videos); // Verificar os vídeos recebidos
  return (
    <section className="section">
      <h3 style={{ backgroundColor: cor }}>{nome}</h3>
      <div className="video__container">
        {videos.map((video) => (
          <Card key={video.id} {...video} cor={cor}/>
        ))}
      </div>
    </section>
  );
};

export default Section;
