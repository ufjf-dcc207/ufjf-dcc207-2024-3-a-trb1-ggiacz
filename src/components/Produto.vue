<template>
    <div class="produto">
      <img :src="imagem" alt="Imagem do Produto" class="produto-imagem" />
      <div class="produto-detalhes">
        <h2 class="produto-titulo">{{ titulo }}</h2>
        <h3 class="produto-subtitulo">{{ subtitulo }}</h3>
        <p class="produto-descricao">{{ descricao }}</p>
        <p class="produto-valor">{{ valor }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    imagem: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    subtitulo: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    valor: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .produto {
    display: flex;
    align-items: center;
    gap: 20px;
    border: 2px solid white;
    background-color: black;
    padding: 10px;
    margin-bottom: 20px;
    width: 75%; 
    margin-left: auto;
    margin-right: auto;
  }
  
  .produto-imagem {
    max-width: 120px;
    max-height: 160px;
    object-fit: cover;
    border: 2px solid white;
  }
  
  .produto-detalhes {
    flex: 1;
  }
  
  .produto-titulo {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 5px;
  }
  
  .produto-subtitulo {
    font-size: 1.2rem;
    color: #ff6600;
    margin-bottom: 10px;
  }
  
  .produto-descricao {
    font-size: 1rem;
    color: white;
    margin-bottom: 10px;
  }
  
  .produto-valor {
    font-size: 1.2rem;
    color: #ff6600;
    font-weight: bold;
  }
  </style>
  