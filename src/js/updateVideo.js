import { connectApi } from "./connectApi";

async function updateVideo(updatedVideo) {
  try {
    
    const response = await connectApi.updateVideo(
      updatedVideo.id,
      updatedVideo.titulo,
      updatedVideo.categoria,
      updatedVideo.imagem,
      updatedVideo.url,
      updatedVideo.descricao
    );
    console.log("Resultado do update:", response);

    if (response) {
      console.log(`Vídeo com id ${updatedVideo.id} atualizado com sucesso.`);
      return true;
    } else {
      console.error("Erro ao atualizar o vídeo:", response.statusText);
      return false;
    }
  } catch (erro) {
    console.error("Erro ao atualizar o vídeo:", erro);
    return false;
  }
}

export default updateVideo;
