<template>
  <div class="container">
    <div class="left-sidebar">
      <Logo class="return-logo" @click="navegaParaHome" />
      <Navbar />
    </div>

    <div class="products-card">
      <h1>nossos produtos</h1>

      <Loading v-if="loading" class="load" />

      <div v-else>
        <Produto imagem="./src/assets/produto1.jpg" titulo="Venturia RPG" subtitulo="Jogo de RPG"
          descricao="Um sistema de RPG fantástico, situado num mundo renascentista onde a magia e tecnologia competem para ver qual será o próximo passo da civilização.
          Ao mesmo tempo, defesas são levantadas de todos os lados contra forças há muito tempo esquecidas que acabaram de despertar." valor="grátis" />
        <Produto imagem="./src/assets/produto2.jpg" titulo="Caminhos de Mar Azul" subtitulo="Livro"
          descricao="Contos publicados mensalmente sobre um andarilho e suas aventuras." valor="R$ 15,90/mês" />
        <Produto imagem="./src/assets/produto3.jpg" titulo="Castelo Alto" subtitulo="Jogo de Tabuleiro"
          descricao="Uma combinação impecável de Starcraft, Clash Royale e Civilization. Compilado e trazido para tabuleiro"
          valor="R$ 189,90" />
        <Produto imagem="https://via.placeholder.com/120x168" titulo="Imagine um produto aqui" subtitulo="Tipo do Produto"
          descricao="Imagine uma descrição incrível"
          valor="R$ 4,99" />
        <Produto imagem="https://via.placeholder.com/120x168" titulo="continuar esse formato de projeto para os próximos trabalhos" subtitulo="pois pretendo continuar desenvolvendo esse site"
          descricao="😎"
          valor="R$ 20000,99" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Logo from '@/components/Logo.vue';
import Produto from '@/components/Produto.vue';
import Loading from '@/components/Loading.vue';

import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 8000);

const navegaParaHome = () => {
  if (router.currentRoute.value.name === 'home') return;
  router.push({ name: 'home' });
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.return-logo {
  margin-bottom: 20px;
  cursor: pointer;
  border: 2px solid white;
}

.left-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 20px;
}

.load {
  margin-top: 20%;
}

.products-card {
  background-color: black;
  border: 2px solid white;
  padding: 15px;
  text-align: center;
  height: 80vh;
  width: 60vw;
  overflow-y: auto;
  overflow-x: hidden;

}
</style>