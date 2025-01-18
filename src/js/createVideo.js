import { connectApi } from './connectApi.js';

async function createVideo(titulo, categoria, imagem, url, descricao) {
  try {
    const response = await connectApi.createVideo(titulo, categoria, imagem, url, descricao);
    console.log("Vídeo criado com sucesso:", response);
  } catch (error) {
    console.error("Erro ao criar vídeo:", error);
  }
}

export default createVideo;