<template>
  <div class="container">
    <div class="left-sidebar">
      <Logo class="return-logo" @click="navegaParaHome" />
      <Navbar />
    </div>

    <div class="products-card">
      <h1>seus itens</h1>

      <Login v-if="!usuarioLogado" />

      <div v-else>
        <div class="card">Produto 1</div>
        <div class="card">Produto 2</div>
        <div class="card">Produto 3</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Logo from '@/components/Logo.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Login from '../components/Login.vue';

const router = useRouter();

const usuarioLogado = ref(false);

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

.products-card {
  background-color: black;
  border: 2px solid white;
  padding: 15px;
  text-align: center;
  height: 80vh;
  width: 60vw;
  overflow-y: auto;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
}

</style>
