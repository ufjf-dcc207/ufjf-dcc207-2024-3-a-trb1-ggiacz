<template>
    <div>
      <Logo class="home-logo"/>
      <Navbar/>
    </div>
  </template>
  
  <script setup>
  import Navbar from '../components/Navbar.vue';
  import Logo from '@/components/Logo.vue';
  
  </script>
  
  <style scoped>
  .home-logo {
    scale: 1.45;
    margin-bottom: 75px;
  }
  
  </style>
  