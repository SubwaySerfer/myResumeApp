<template>
  <div class="main_cv">
    <div class="wrapper_cv">
      <section class="header">
        <div class="promo_block">
          <h1 class="name_h1">Afanasyev Aleksander</h1>
          <h2 class="name_sublime">Front-end Developer</h2>
        </div>
        <div class="promo_contacts">
          <a
            href="mailto:subwayserfer.job@gmail.com"
            class="promo_contacts_link"
            >subwayserfer.job@gmail.com</a
          >
        </div>
      </section>
      <section class="experience">
        <h3 class="experience__label">Work Experience:</h3>
        <ul>
          <li class="experience_li">
            <em class="em_bold">Technical Support Specialist (Dec 22 - Now)</em>
            Processing requests from the partner company and solving tasks from
            territorial managers. Working with programs: Bitrix and OTRS Learn
            JS and doing pet-projects (Mar 22 - Now) I learn something new from
            this vast field every day. I try to improve my skills and use the
            best approaches. I like to explore new horizons!
          </li>

          <li class="experience_li">
            <em class="em_bold"
              >Project manager in taxi service (Nov 20 - Oct 21)</em
            >
            Work with employees, and analyzed the received data on complaints
            about the work of taxi drivers and their shortcomings. Work was
            carried out to improve the level of service, which turns of speech
            are better to use, and how to get out of conflict situations.
          </li>
        </ul>
      </section>
      <section class="skills__wrapper">
        <h3 class="skills_h3">Skills:</h3>
        <ul class="skills_ul">
          <li class="skills__item">HTML, CSS</li>
          <li class="skills__item">JavaScript</li>
          <li class="skills__item">Git, GitHub, Gulp, Webpack</li>
          <li class="skills__item">Vue, Vuex, Vue route</li>
          <li class="skills__item">Tailwind, SASS</li>
          <li class="skills__item">Bitrix, OTRS, HelpDesk</li>
          <li class="skills__item">DRY, KISS, YAGNI</li>
        </ul>

        <h3 class="skills_h3">Languages:</h3>
        <ul class="skills_ul">
          <li class="skills__item">
            English - Intermediate/Upper-intermediate
          </li>
          <li class="skills__item">Russian - Native</li>
          <li class="skills__item">German - Basic</li>
        </ul>

        <h3 class="skills_h3">Education:</h3>
        <ul class="skills_ul">
          <li class="skills__item">
            The College of the Humanities at the Russian State University for
            the Humanities (RSUH) Western Philosophy (2018-2022)
          </li>
        </ul>

        <h3 class="skills_h3">Podcasts and YouTubers:</h3>
        <ul class="skills_ul">
          <li class="skills__item"><a href="">Web-standards</a></li>
          <li class="skills__item"><a href="">Frontend Weekend</a></li>
          <li class="skills__item"><a href="">JavaScript.Ninja </a></li>
          <li class="skills__item"><a href="">Rolling Scopes School </a></li>
        </ul>
      </section>
      <section class="code_example">
        <h3 class="skills_h3">Code example:</h3>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McvMyCv',
}
</script>

<style scoped>
h3 {
  margin-bottom: 0.5rem;
}
.name_h1 {
  color: #ffe804;
  font: 600 2.2rem/110% Georgia;
  letter-spacing: 0.06em;
  text-align: center;
}
.name_sublime {
  font: 400 1.6rem/105% Georgia;
  letter-spacing: 0.06em;
  text-align: center;
}
.main_cv {
  background-color: #7575d9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-area: 1 / 4 / end / end;
  padding: 15px 25px 0;
}
.wrapper_cv {
  /* background-color: #a603a6; */
  background-color: #b3b3b3;
  width: 100%;
  height: 100%;
  padding: 15px 13px 0;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* padding: 10px 5px 0; */
}
.promo_block {
  height: auto;
  width: 100%;
  padding-bottom: 20px;
  align-self: center;
  /* flex: 2 1; */
}
.promo_empty {
  flex: 1 1 20px;
}
.promo_contacts {
  width: 137px;
  text-align: left;
  border-left: #ffe804 1px solid;
}
.promo_contacts_link {
  font-size: 1rem;
}
.experience__label {
  font-weight: 600;
  font-size: 1.8rem;
}
.experience {
  text-align: justify;
  font: 400 1rem/105% Georgia;
  letter-spacing: 0.06em;
}
.em_bold {
  font-weight: 600;
  font-style: normal;
}
.experience_li {
  padding: 10px;
  font-size: 1.4rem;
  height: auto;
  line-height: 1.1;
}

.skills_h3 {
  font: 600 1.8rem/110% Georgia;
  letter-spacing: 0.06em;
}
.skills__item {
  font-size: 1.4rem;
  position: relative;
}
.skills__item::before {
  border: 3px solid #ffe804;
  border-radius: 100px;
  height: 3px;
  width: 3px;
  position: absolute;
  left: -9px;
  top: 7.5px;
  content: '';
}
.skills_ul {
  padding: 0 10px 10px;
}
</style>
