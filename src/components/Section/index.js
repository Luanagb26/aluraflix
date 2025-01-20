import Card from "../Card";
import "./Section.css";

const Section = ({ nome, cor, videos, onDeleteVideo, onEditVideo }) => {

  return (
    <section className="section">
      <h3 style={{ backgroundColor: cor }}>{nome}</h3>
      <div className="video__container">
        {videos.map((video) => (
          <Card key={video.id} {...video} cor={cor} onDeleteVideo={onDeleteVideo} onEditVideo={() => onEditVideo(video)}/>
        ))}
      </div>
    </section>
  );
};

export default Section;
