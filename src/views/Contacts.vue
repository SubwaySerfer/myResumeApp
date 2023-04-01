<template>
  <div class="flex-col flex p-14 col-start-4 col-end-11 text-lg">
    <!-- <mcv-image-start class="" /> -->
    <!-- <McvContactMe /> -->
    <h1 class="text-4xl mb-5">CONTACT ME</h1>
    <p class="mb-7">
      I am available for hire and open to any ideas of cooperation.
    </p>
    <ul class="">
      <li class="flex mb-5">
        <label for="" class="w-20 mr-20">E-mail:</label>
        <img
          class="w-7 mr-2"
          src="@/assets/icon/mail-icon-cont.png"
          alt="icon e-mail"
        /><a
          href="mailto:subwayserfer.job@gmail.com
"
          class="text-yel2 font-semibold"
          >Subwayserfer.job@gmail.com
        </a>
      </li>
      <li class="flex mb-5">
        <label for="" class="w-20 mr-20">LinkedIn:</label>
        <img
          class="w-7 mr-2"
          src="@/assets/icon/linkedin-icon-cont.png"
          alt="icon linkedin"
        /><a
          href="https://www.linkedin.com/in/subway"
          target="_blank"
          class="font-semibold"
          >Subway</a
        >
      </li>
      <li class="flex mb-5">
        <label for="" class="w-20 mr-20">GitHub:</label>
        <img
          class="w-7 mr-2"
          src="@/assets/icon/github-icon-cont.png"
          alt="icon github"
        /><a
          href="https://github.com/SubwaySerfer"
          target="_blank"
          class="text-yel2 font-semibold"
          >SubwaySerfer</a
        >
      </li>
      <li class="flex mb-5">
        <label for="" class="w-20 mr-20">Twitter:</label>
        <img
          class="w-7 mr-2"
          src="@/assets/icon/twitter-icon.png"
          alt="twitter logo icon"
        /><a
          href="https://twitter.com/Subway_Serfer"
          target="_blank"
          class="font-semibold"
          >@Subway_Serfer</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
// import McvImageStart from '@/components/ImageStart'
// import McvContactMe from '@/components/ContactMe'

export default {
  name: 'McvContacts',
  components: {
    // McvImageStart,
    // McvContactMe,
  },
}
</script>
