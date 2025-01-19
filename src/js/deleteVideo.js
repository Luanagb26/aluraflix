import { connectApi } from "./connectApi.js";

async function deleteVideo({id, atualizarLista}) {
    
    const confirmacao = window.confirm("Tem certeza que deseja deletar este vídeo?");
    if (confirmacao) {
        try {
            await connectApi.deleteVideo(id);
            console.log(`Vídeo com id ${id} deletado com sucesso.`);

            // Atualiza a lista de vídeos após a exclusão
            if (atualizarLista) {
                atualizarLista(id);
            }
        } catch (erro) {
            console.error("Erro ao deletar o vídeo:", erro);
        }
    }
}
 export default deleteVideo;