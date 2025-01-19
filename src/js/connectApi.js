
async function listVideos() {
    try {
        const connection = await fetch("http://localhost:3000/videos");
        if (!connection.ok) {
            throw new Error(`Erro na requisição: ${connection.status}`);
        }

        const convertedConnection = await connection.json();

        return convertedConnection;

    } catch (error) {
        console.error("Erro ao listar vídeos:", error);
        return [];
    }
}

async function createVideo(titulo, categoria, imagem, url, descricao) {
    try {

        const connection = await fetch("http://localhost:3000/videos", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
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

    } catch (erro) {
        console.log("Erro ao criar o video", erro);
    }
}

async function deleteVideo(id) {
    try {
        const connection = await fetch(`http://localhost:3000/videos/${id}`, {
            method: "DELETE"
        });


        if (!connection.ok) {
            throw new Error(`Não foi possível deletar o vídeo com ID ${id}: ${connection.status}`);
        }
        console.log(`Vídeo com ID ${id} deletado com sucesso do servidor.`);
        return true; // Sucesso
    

    } catch (erro) {
        console.error("Erro ao deletar o vídeo:", erro);
        return false; // Falha
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

export const connectApi = {
    listVideos,
    createVideo,
    deleteVideo
}