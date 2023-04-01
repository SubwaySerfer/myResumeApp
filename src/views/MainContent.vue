<template>
  <!-- <mcv-sidebar class="grid-rows-2 pt-20" /> -->
  <!-- <img
    src="@/assets/image/backgound.jpg"
    alt="background"
    class="col-start-1 col-end-11 bg-cover -z-10 row-span-full w-screen h-screen"
  /> -->
  <mcv-image-start class="" />
  <mcv-about-me />

  <!-- <h1>This is an about page</h1> -->

  <!-- <mcv-my-stack /> -->
</template>

<script>
// import McvSidebar from '@/components/Sidebar'
import McvImageStart from '@/components/ImageStart'
import McvAboutMe from '@/components/AboutMe'
// import McvMyStack from '@/components/MyStack'

export default {
  name: 'McvMainContent',
  components: {
    // McvSidebar,
    McvImageStart,
    McvAboutMe,
    // McvMyStack,
  },
  // mounted() {
  //   this.$store.dispatch(actionTypes.getCurrentUser);
  // },
}
</script>
