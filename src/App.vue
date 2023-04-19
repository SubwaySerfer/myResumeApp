<template>
  <div id="app" class="app__content">
    <!-- app__content grid grid-cols-10 grid-rows-4 bg-slate-400 h-screen 2xl:min-h-[950px] xl:min-h-[830px] -->
    <mcv-image-start />
    <!-- <mcv-sidebar /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import McvImageStart from '@/components/ImageStart'
//import McvSidebar from '@/components/Sidebar'
// import { actionTypes } from '@/store/modules/auth';

export default {
  name: 'App',
  components: {
    McvImageStart,
    // McvSidebar,
  },
  // mounted() {
  //   this.$store.dispatch(actionTypes.getCurrentUser);
  // },
}
</script>
<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->

<style>
html {
  font-size: 10px;
}
h3,
h1,
h2 {
  margin: 0;
}

.app__content {
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 25rem repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);
}
</style>

<!-- app__content grid grid-cols-10 grid-rows-4 bg-slate-400 h-screen 2xl:min-h-[950px] xl:min-h-[830px] -->
