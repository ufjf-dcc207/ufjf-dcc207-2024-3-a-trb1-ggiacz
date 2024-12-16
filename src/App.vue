<template>
  <Transition name="route-fade">
    <RouterView />
  </Transition>
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

.route-fade-enter-active,
.route-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.route-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.route-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
