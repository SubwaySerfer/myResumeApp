<template>
  <div class="col-start-4 col-end-11 flex flex-col w-auto">
    <div class="w-full">
      <h1 class="text-4xl">PORTFOLIO</h1>
      <p class="text-base">
        See my works below. Unless explicitly stated otherwise,
        <span class="font-bold"
          >front-end parts were completely done by me.</span
        >
      </p>

      <h3 class="font-bold">
        Currently open to co-operation on new and existing projects.
      </h3>
      Looking for a CTO, a mentor, or a just full-stack dev willing to join your
      team?
      <router-link to="/contacts" class="font-semibold text-yel2"
        >Contact me.</router-link
      >
      I will answer you in ~48 hours.
    </div>
    <ul>
      <li class="grid">
        <h2>Cardio</h2>
        <img
          src="@/assets/image/cardio-start.png"
          alt="start page screenshot cardio app"
        />
        <label for="">TECHNOLOGIES</label>
        <ul class="flex">
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </li>

      <li>
        <h3>Start</h3>
        <p>Learn Python</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import McvCardioProject from '@/components/CardioProject'

export default {
  name: 'McvPortfolioProjects',
  // components: ,
}
</script>

<style></style>
