<template>
  <section class="ready-wrapper">
    <figure class="ready-gif">
      <img
        class="ready-gif_img"
        src="../assets/video/pageNotReadyCompress.gif"
        alt="This animated GIF how i crash computer"
      />
    </figure>
    <div class="ready-content">
      <h3 class="ready-content_label">This page is not ready!</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'McvNotReady',
}
</script>

<style></style>
<style scoped>
.ready-wrapper {
  box-sizing: border-box;
  padding: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.ready-content_label {
  font-size: 1.7rem;
  font-weight: 600;
}
</style>
