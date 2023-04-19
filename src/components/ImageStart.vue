<template>
  <div class="navigation">
    <router-link to="/" class="nav_avatar">
      <img
        src="@/assets/image/photo_2022-12-11_10-29-09.jpg"
        alt="MyPhoto"
        class="nav_avatar_img"
    /></router-link>

    <div class="">
      <router-link to="/" class="">
        <h1 class="avatar_name">Afanasyev Aleksander</h1></router-link
      >
      <h2 class="avatar_name_sublime">Frontend Developer</h2>
    </div>
    <section class="nav_arr">
      <ul>
        <li><router-link to="/offer">OFFER</router-link></li>
        <li><router-link to="/portfolio">PORTFOLIO</router-link></li>
        <li><router-link to="/my_cv">CV</router-link></li>
        <br />
        <li><router-link to="/hobbies">MY HOBBIES</router-link></li>
        <li><router-link to="/contacts">CONTACT ME</router-link></li>
      </ul>
    </section>

    <section class="nav_arr_social">
      <div class="label_nav_social">Get in touch:</div>
      <div class="nav_arr_social_items">
        <a
          href="mailto:subwayserfer.job@gmail.com
"
          class=""
        >
          <img
            class="nav_arr_social_items_el"
            src="@/assets/icon/icon-mail.png"
            alt="icon mail"
        /></a>
        <a href="https://www.linkedin.com/in/subway" target="_blank"
          ><img
            class="nav_arr_social_items_in"
            src="@/assets/icon/icon-linkedIn.png"
            alt="icon linkedIn"
        /></a>
        <a href="https://github.com/SubwaySerfer" target="_blank"
          ><img
            class="nav_arr_social_items_el"
            src="@/assets/icon/icon-github.png"
            alt="icon GitHub"
        /></a>
        <a href="https://www.instagram.com/afonia633/" target="_blank" class=""
          ><img
            class="nav_arr_social_items_el"
            src="@/assets/icon/icon-insta.png"
            alt="icon Instagram"
        /></a>
      </div>
    </section>
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
  gap: 2.5rem;
  justify-content: center;
}
.nav_avatar {
  z-index: 1;
  width: 10rem;
  align-self: center;
  /* border: 2px solid black;
  border-radius: 100px; */
  box-sizing: border-box;
  background-color: black;
  border-radius: 25px;
}
.nav_avatar_img {
  border-radius: 5px;
  border: 2px solid black;
  border-radius: 25px;
}

.avatar_name {
  font-weight: 700;
  font-size: 1.8rem;
  text-align: center;
}
.avatar_name_sublime {
  text-align: center;
  font-size: 1.6rem;
}

.nav_arr {
  align-self: flex-start;
  padding-left: 3.3rem;
  font-size: 1.4rem;
}
.nav_arr_social {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 3.3rem;
}
.label_nav_social {
  font-size: 1.5rem;
  font-weight: 500;
}
.nav_arr_social_items {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
.nav_arr_social_items_el {
  width: 2rem;
}

.nav_arr_social_items_in {
  width: 1.6rem;
}
</style>
