<template>
  <div class="col-start-5 col-end-10 row-start-2">
    <div class="font-bold text-6xl">Hi, I'm Aleksander,</div>
    <h2 class="text-5xl">
      a freelance front-end developer,<br />specialize in Vue.
    </h2>
  </div>
  <div
    class="row-start-3 row-end-5 text-4xl col-start-5 font-light uppercase flex flex-col place-items-start"
  >
    <router-link to="/offer" class="border mb-6 text-center p-3.5"
      >offer</router-link
    >

    <router-link to="/portfolio" class="border mb-6 text-center p-3.5"
      >Portfolio</router-link
    >
    <router-link
      to="/hobbies"
      class="border text-center p-3.5 whitespace-nowrap"
      >my hobbies</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'McvAboutMe',
}
</script>
