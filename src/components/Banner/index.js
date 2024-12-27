import './Banner.css'

const Banner = ({categoria, titulo, descricao, url, imagem}) => {
    const videoId = url.split('/').pop().split('?')[0];
    const videoThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return(
        <section className='banner' style={{backgroundImage: `url(${videoThumbnail})`}}>
            <div className='banner__content'>
                <h2>{categoria}</h2>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
            <div className='banner__player'>
            <iframe width="560" height="315" 
            src={`${url}?modestbranding=1&rel=0&showinfo=0&controls=1`} 
            title="YouTube video player" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>

            </iframe>
            </div>
        </section>
    )
};

export default Banner;