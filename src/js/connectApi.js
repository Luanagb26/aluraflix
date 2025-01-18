
async function listVideos() {
    const connection = await fetch("http://localhost:3000/videos");
    const convertedConnection = await connection.json();

    return convertedConnection;
}

async function createVideo(titulo, categoria, imagem, url, descricao) {
    try{
        
        const connection = await fetch("http://localhost:3000/videos", {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                titulo: titulo,
                imagem: imagem,
                url: url,
                categoria: categoria,
                descricao: descricao
            })
        });

        const convertedConnection = await connection.json();
        
        return convertedConnection;
    
    } catch(erro){
        console.log("Erro ao criar o video", erro);
    }
}

async function deleteVideo(id) {
    try{
        const connection = await fetch("http://localhost:3000/videos", {
            method: "DELETE"
        })

        const convertedConnection = await connection.json();
        return convertedConnection;

    } catch(erro) {
        console.log("Erro ao deletar video", erro);
    }
}

async function cleanForm(titulo, imagem, url, categoria, descricao) {       
    const connection = await fetch("http://localhost:3000/videos")
    const convertedConnection = await connection.json();
    return convertedConnection;
        
}

async function updateVideo(titulo, imagem, url, categoria, descricao) {
    //desenvolver editar
}

export const connectApi ={
    listVideos,
    createVideo,
    deleteVideo
}