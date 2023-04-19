<template>
  <section class="hobbies__wrapper">
    <not-ready-page></not-ready-page>

    <div class="hobbies-content">
      <h1>My Hobbies</h1>
      <h2>Books</h2>
      <h3>Which countries i visit</h3>
    </div>
  </section>
</template>

<script>
import NotReadyPage from '@/components/NotReadyPage'

export default {
  components: {NotReadyPage},
  name: 'McvMyHobbies',
}
</script>

<style></style>

<style scoped>
.hobbies__wrapper {
  grid-area: 1 / 2 / end / end;
}
.hobbies-content {
  display: none;
}
</style>
