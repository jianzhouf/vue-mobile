<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "moicrosoft yahei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
html {
  font-size: 10px;
}
html,
body {
  padding: 0;
  margin: 0;
}
body {
  background: #f7f7f7;
}
div{
  font-size: 18px;
}
</style>
