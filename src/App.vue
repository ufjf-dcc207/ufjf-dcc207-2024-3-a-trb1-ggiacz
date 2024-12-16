<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  color: white;
}

html,
body,
#app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.card {
  background-color: black;
  border: 2px solid white;
  padding: 15px;
  text-align: center;
  transition: transform 0.1s ease-in-out, border-color 0.1s;
}
</style>
