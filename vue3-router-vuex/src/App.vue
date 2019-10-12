<template>
  <div id="app">
    <!-- 路由导航 -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/count">Count</router-link> |
      <router-link to="/page1/bar">page1</router-link>|
      <router-link to="/page2/1/vuejs?foo=bar">page2</router-link>
    </div>
    <!-- 路由出口 -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
