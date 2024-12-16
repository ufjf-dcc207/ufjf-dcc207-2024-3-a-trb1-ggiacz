<template>
  <div class="container">
    <div class="left-sidebar">
      <Logo class="return-logo" @click="navegaParaHome" />
      <Navbar />
    </div>

    <div class="products-card">
      <h1>entre em contato</h1>

      <form @submit.prevent="enviarContato" class="form-contato">
        <div class="form-row">
          <div class="form-group">
            <label for="email">e-mail</label>
            <input
              id="email"
              type="email"
              v-model="form.email"
              placeholder="digite seu e-mail"
              required
            />
          </div>
          <div class="form-group">
            <label for="produto">sobre o que deseja falar?</label>
            <select id="produto" v-model="form.produto" required>
              <option value="" disabled>selecione um item</option>
              <option value="produto 1">produto 1</option>
              <option value="produto 2">produto 2</option>
              <option value="produto 3">produto 3</option>
            </select>
          </div>
        </div>

        <label for="assunto">assunto</label>
        <input
          id="assunto"
          type="text"
          v-model="form.assunto"
          placeholder="digite o assunto"
          required
        />

        <label for="mensagem">mensagem</label>
        <textarea
          id="mensagem"
          v-model="form.mensagem"
          placeholder="digite sua mensagem"
          rows="16"
          required
        ></textarea>

        <button type="submit">enviar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Logo from '@/components/Logo.vue';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';

const router = useRouter();

const form = reactive({
  email: '',
  assunto: '',
  produto: '',
  mensagem: '',
});

const navegaParaHome = () => {
  if (router.currentRoute.value.name === 'home') return;
  router.push({ name: 'home' });
};

const enviarContato = () => {
  alert(`Ticket enviado com sucesso!\nE-mail: ${form.email}\nProduto: ${form.produto}\nAssunto: ${form.assunto}\nMensagem: ${form.mensagem}`);
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
  padding: 50px;
  text-align: center;
  height: 80vh;
  width: 60vw;
  overflow-y: auto;
  overflow-x: hidden;
}

.form-contato {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.form-row {
  display: flex;
  gap: 15px;
  justify-content: space-between;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-contato label {
  font-size: 1rem;
  color: white;
  font-weight: bold;
}

.form-contato input,
.form-contato select,
.form-contato textarea {
  padding: 10px;
  border: 2px solid white;
  background-color: black;
  color: white;
  font-size: 1rem;
}

.form-contato input:focus,
.form-contato select:focus,
.form-contato textarea:focus {
  outline: none;
  border-color: #ff6600;
}

.form-contato button {
  padding: 10px;
  border: 2px solid white;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.form-contato button:hover {
  background-color: #ff6600;
  color: black;
}
</style>
