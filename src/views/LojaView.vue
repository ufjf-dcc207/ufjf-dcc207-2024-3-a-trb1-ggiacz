<template>
  <div class="container">
    <div class="left-sidebar">
      <Logo class="return-logo" @click="navegaParaHome" />
      <Navbar />
    </div>

    <div class="products-card">
      <h1>nossos produtos</h1>

      <Loading v-if="loading" class="load"/>

      <div v-else>
        <Produto imagem="https://via.placeholder.com/160x120" titulo="Produto 1" subtitulo="Subtítulo 1"
          descricao="Descrição do produto 1." valor="R$ 100,00" />
        <Produto imagem="https://via.placeholder.com/160x120" titulo="Produto 2" subtitulo="Subtítulo 2"
          descricao="Descrição do produto 2." valor="R$ 200,00" />
        <Produto imagem="https://via.placeholder.com/160x120" titulo="Produto 3" subtitulo="Subtítulo 3"
          descricao="Descrição do produto 3." valor="R$ 300,00" />
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