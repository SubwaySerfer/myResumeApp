<template>
  <div class="main_cv">
    <div class="wrapper_cv">
      <section class="header">
        <!-- <div class="promo_empty"></div> -->
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
        <h3>Work Experience:</h3>
        <ul class="experience_ul">
          <li class="experience_li">
            Technical Support Specialist (Dec 22 - Now) Processing requests from
            the partner company and solving tasks from territorial managers.
            Working with programs: Bitrix and OTRS Learn JS and doing
            pet-projects (Mar 22 - Now) I learn something new from this vast
            field every day. I try to improve my skills and use the best
            approaches. I like to explore new horizons!
          </li>

          <li class="experience_li">
            Project manager in taxi service (Nov 20 - Oct 21) Work with
            employees, and analyzed the received data on complaints about the
            work of taxi drivers and their shortcomings. Work was carried out to
            improve the level of service, which turns of speech are better to
            use, and how to get out of conflict situations.
          </li>
        </ul>
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
.name_h1 {
  color: #ffe804;
  font: 600 1.5rem/110% Georgia;
  letter-spacing: 0.06em;
  text-align: center;
}
.name_sublime {
  font: 400 1rem/105% Georgia;
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
  background-color: #a603a6;
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
  font-size: 0.65rem;
}
.experience {
  text-align: justify;
  font: 400 1rem/105% Georgia;
  letter-spacing: 0.06em;
}
/* .experience_ul {
  gap: 10px;
} */
.experience_li {
  padding: 10px;
}
</style>
