<template>
    <nav class="card navbar">
      <ul>
        <li v-for="item in menuItems" :key="item.path">
          <RouterLink :to="item.path" class="nav-link" exact-active-class="active-link">
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
      <div class="socials">
        <a href="https://www.instagram.com/" class="social" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/" class="social" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://discord.com/" class="social" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-discord"></i>
        </a>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  
  const menuItems = [
    { label: 'loja', path: '/loja' },
    { label: 'biblioteca', path: '/biblioteca' },
    { label: 'contato', path: '/contato' },
  ]
  </script>
  
  <style>
  .nav-link {
    display: block; 
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 10px; 
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin: 10px 0;
    font-size: large;
  }
  
  li:hover {
    background-color: #ffffff;
    color: black; 
    cursor: pointer;
  }
  
  li .nav-link:hover {
    color: black; 
  }
  
  .socials {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .social {
    text-decoration: none;
    font-size: 1.5rem;
    border: 1px solid #000000;
    opacity: 60%;
  }
  
  .social:hover {
    opacity: 100%;
  }

  </style>
  