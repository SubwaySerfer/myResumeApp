<template>
  <div class="bg-yel2 row-span-full col-start-1 col-end-4 -z-10"></div>
  <router-link
    to="/"
    class="w-44 row-start-1 row-end-2 col-start-1 justify-self-center pt-6 col-end-4 pb-5 2xl:w-56 2xl:pt-9 xl:w-48 xl:pt-8"
    ><img
      src="@/assets/image/photo_2022-12-11_10-29-09.jpg"
      alt="MyPhoto"
      class="rounded-full"
  /></router-link>

  <div
    class="row-start-2 row-end-3 col-start-1 col-end-4 justify-self-center self-end -translate-y-10 translate-x-0.5 uppercase xl:text-2xl 2xl:text-3xl"
  >
    <router-link to="/" class="">
      <h1 class="font-bold">Afanasyev Aleksander</h1></router-link
    >
    <h2 class="font-semibold text-center">Frontend Developer</h2>
  </div>
  <div
    class="row-start-3 col-start-1 col-end-4 pl-8 2xl:text-2xl 2xl:pl-12 xl:text-xl xl:pt-4"
  >
    <ul>
      <li><router-link to="/offer">OFFER</router-link></li>
      <li><router-link to="/portfolio">PORTFOLIO</router-link></li>
      <li><router-link to="/hobbies">MY HOBBIES</router-link></li>
      <li><router-link to="/contacts">CONTACT ME</router-link></li>
    </ul>
  </div>

  <div
    class="row-start-4 col-start-1 col-end-4 justify-self-start pl-8 self-center 2xl:text-2xl 2xl:pl-12 xl:text-xl"
  >
    <div class="mb-6 uppercase">Get in touch</div>
    <div class="flex gap-x-2.5 items-center">
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
        ><img class="w-9" src="@/assets/icon/icon-github.png" alt="icon GitHub"
      /></a>
      <a
        href="https://www.instagram.com/afonia633/"
        target="_blank"
        class="-ml-1"
        ><img
          class="w-9 -pl-1"
          src="@/assets/icon/icon-insta.png"
          alt="icon Instagram"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McvImageStart',
}
</script>
