<template>
  <div id="app">
    <!-- 路由导航 -->
    <div id="nav">
      <h2>vue中组件通信的八种方式</h2>
      <ul>
        <li><router-link to="/demo1">父子通信 props / $emit</router-link> |</li>
        <li><router-link to="/demo2">父子通信 $children / $parent</router-link> |</li>
        <li><router-link to="/demo3">父子或跨级通信 provide/ inject</router-link> |</li>

      </ul>
    </div>
    <hr>
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
