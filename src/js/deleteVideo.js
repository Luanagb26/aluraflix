import { connectApi } from "./connectApi.js";

async function deleteVideo(id) {
    
    const confirmacao = window.confirm("Tem certeza que deseja deletar este vídeo?");
    if (confirmacao) {
        try {
            await connectApi.deleteVideo(id);
            console.log(`Vídeo com id ${id} deletado com sucesso.`);

        } catch (erro) {
            console.error("Erro ao deletar o vídeo:", erro);
        }
    }
}
 export default deleteVideo;