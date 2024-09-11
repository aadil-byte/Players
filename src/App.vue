<template>
 <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filter">Filter Players</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

nav a:hover,
nav a.active {
  background-color: #575757;
  color: #fff;
}

nav a.active {
  font-weight: bold;
}

nav a:first-child {
  margin-left: 0;
}

nav a:last-child {
  margin-right: 0;
}
</style>