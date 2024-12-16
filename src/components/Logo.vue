<template>
  <div class="logo-container">
    <img src="/src/assets/avatar.png" alt="Logo" class="logo-image" />
    <h1>venturia</h1>
    <p>ENTERTAINMENT</p>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style>
.logo-container {
  text-align: center;
  margin: 20px 0;
  border: 1px solid white;
  padding: 10px;
}

.logo-container:hover {
  cursor: pointer;
  background-color: white;
}

.logo-container:hover h1,
.logo-container:hover p {
  color: black;
}

.logo-image {
  max-width: 170px;
  max-height: 170px;
  padding: 5px;
}

p {
  font-size: 0.7rem;
  margin-top: -10px;
  font-weight: 300;
}

h1 {
  font-weight: 400;
  margin-top: -8px;
}
</style>
