<template>
  <section class="about_wrapper">
    <div class="about_info">
      <h2 class="about_info_label">Hi, I'm Afanasyev Aleksander!</h2>
      <h3 class="about_info_sublime">
        a freelance front-end developer,<br />specialize in Vue.
      </h3>
    </div>

    <div class="nav_info">
      <router-link to="/offer" class="nav_info_item">offer </router-link>

      <router-link to="/my_cv" class="nav_info_item">my CV</router-link>
      <router-link to="/portfolio" class="nav_info_item">Portfolio</router-link>
      <router-link to="/hobbies" class="nav_info_item">Hobbies</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'McvAboutMe',
}
</script>

<style scoped>
.about_wrapper {
  grid-column: 3 / end;
  grid-row: 2 / end;
  display: flex;
  flex-direction: column;
  gap: 7rem;
}

.about_info_label {
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.about_info_sublime {
  font-size: 2rem;
  font-weight: 400;
}
.nav_info {
  display: flex;
  gap: 2rem;
  align-items: center;
}
.nav_info_item {
  width: auto;
  box-sizing: border-box;
  padding: 1px 5px 4px;
  border: 2px solid black;
  font-size: 1.6rem;
  border-radius: 5px;
  font-weight: 500;
  display: flex;
}
</style>
