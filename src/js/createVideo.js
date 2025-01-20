import { connectApi } from './connectApi.js';

async function createVideo(titulo, categoria, imagem, url, descricao) {
  try {
    const response = await connectApi.createVideo(titulo, categoria, imagem, url, descricao);
    alert("Vídeo criado com sucesso!");
  } catch (error) {
    console.error("Erro ao criar vídeo:", error);
  }
}

export default createVideo;