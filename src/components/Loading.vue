<template>
    <div class="loading-modal">
      <h2><font-awesome-icon class="icon-margin" :icon="['fas', 'gear']" spin />carregando...</h2>
      <p class="loading-text">{{ currentText }}</p>
      <div class="loading-bar">
        <div class="loading-progress"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const texts = [
    "conectando ao servidor...",
    "carregando sprites...",
    "preparando animações...",
    "renderizando fases...",
    "ajustando colisões...",
    "aplicando estilo retrô...",
    "quase lá..."
  ];
  
  const currentText = ref(texts[0]);
  
  const updateText = () => {
    let index = 0;
    setInterval(() => {
      index = (index + 1) % texts.length; 
      currentText.value = texts[index];
    }, 1500);
  };
  
  onMounted(() => {
    updateText();
  });
  </script>
  
  <style scoped>
  .loading-modal {
    background-color: black;
    border: 2px solid white;
    padding: 20px;
    margin: auto;
    max-width: 300px;
    text-align: center;
    font-family: "Courier New", Courier, monospace;
  }
  
  .loading-modal h2 {
    color: white;
    margin-bottom: 10px;
  }
  
  .loading-text {
    color: white;
    margin: 10px 0;
    font-size: 1rem;
    height: 1.5rem;
    overflow: hidden;
    text-shadow: 0 0 3px white;
  }
  

  .loading-bar {
    width: 100%;
    height: 10px;
    background-color: white;
    margin-top: 10px;
    position: relative;
    overflow: hidden;
    border: 2px solid white;
  }
  
  .icon-margin {
  color: white;
  margin-right: 13px;
}


  .loading-progress {
    height: 100%;
    background-color: #ff6600;
    animation: progressLoop 1.5s linear infinite;
  }
  
  @keyframes progressLoop {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  </style>
  