<template>
    <div class="login-modal">

        <h2> <i class="fa-solid fa-user"></i> acessar</h2>
        <form @submit.prevent="realizarLogin">
            <input id="username" type="text" v-model="form.username" placeholder="digite seu e-mail" required />

            <button type="submit">login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const usuarioLogado = ref(false);

const form = ref({
    username: '',
});

const realizarLogin = () => {
    if (form.value.username === 'admin' && form.value.password === '1234') {
        usuarioLogado.value = true;
    } else {
        alert('Foi enviado um e-mail com suas credenciais de acesso para o endereço digitado!');
    }
};
</script>

<style scoped>
.login-modal {
    background-color: black;
    border: 2px solid white;
    padding: 20px;
    margin: auto;
    max-width: 300px;
    text-align: left;
}

.login-modal h2 {
    color: white;
    text-align: center;
    margin-bottom: 10px;
}

.login-modal form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.login-modal input {
    padding: 10px;
    border: 2px solid white;
    background-color: black;
    color: white;
    font-size: 1rem;
}

.login-modal input:focus {
    outline: none;
    border-color: #ff6600;
}

.login-modal button {
    padding: 10px;
    border: 2px solid white;
    background-color: black;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.login-modal button:hover {
    background-color: #ffffff;
    color: black;
}
</style>