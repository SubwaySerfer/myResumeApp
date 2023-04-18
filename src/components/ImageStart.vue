<template>
  <div class="navigation">
    <router-link to="/" class="nav_avatar">
      ><img
        src="@/assets/image/photo_2022-12-11_10-29-09.jpg"
        alt="MyPhoto"
        class="rounded-full"
    /></router-link>

    <div class="">
      <router-link to="/" class="">
        <h1 class="font-bold">Afanasyev Aleksander</h1></router-link
      >
      <h2 class="">Frontend Developer</h2>
    </div>
    <div class="">
      <ul>
        <li><router-link to="/offer">OFFER</router-link></li>
        <li><router-link to="/portfolio">PORTFOLIO</router-link></li>
        <li><router-link to="/my_cv">CV</router-link></li>
        <br />
        <li><router-link to="/hobbies">MY HOBBIES</router-link></li>
        <li><router-link to="/contacts">CONTACT ME</router-link></li>
      </ul>
    </div>

    <div class="">
      <div class="">Get in touch</div>
      <div class="">
        <a
          href="mailto:subwayserfer.job@gmail.com
"
          class="mr-1"
        >
          <img class="w-8" src="@/assets/icon/icon-mail.png" alt="icon mail"
        /></a>
        <a href="https://www.linkedin.com/in/subway" target="_blank"
          ><img
            class="w-7"
            src="@/assets/icon/icon-linkedIn.png"
            alt="icon linkedIn"
        /></a>
        <a href="https://github.com/SubwaySerfer" target="_blank"
          ><img
            class="w-9"
            src="@/assets/icon/icon-github.png"
            alt="icon GitHub"
        /></a>
        <a href="https://www.instagram.com/afonia633/" target="_blank" class=""
          ><img
            class=""
            src="@/assets/icon/icon-insta.png"
            alt="icon Instagram"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McvImageStart',
}
</script>

<style scoped>
.navigation {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  z-index: 1;
  background-color: #e3d107;
  overflow: hidden;
  display: flex;

  flex-direction: column;
}
.nav_avatar {
  z-index: 1;
  width: 10rem;
}

.font-bold {
  font-weight: 700;
  font-size: 1.8rem;
}
</style>

<!-- w-44
    row-start-1
    row-end-2
    col-start-1
    justify-self-center
    pt-6
    col-end-4
    pb-5
    2xl:w-56
    2xl:pt-9
    xl:w-48
    xl:pt-8
    -- -->
