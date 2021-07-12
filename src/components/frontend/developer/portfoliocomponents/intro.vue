<template>
<div style="padding: 2%;">
  <div style="text-align: center">
    <img src="@/assets/images/ed.svg" style="width: 30%"/>
  </div>
  <p style="font-family: sofia_proregular;text-decoration: underline;text-decoration-color: #1F81CE">Welcome to your profile</p>
  <p style="font-family: sofia_proregular">From here you can edit your profiel to completion</p>
  <p style="font-family: sofia_probold">Current completion is {{ score }}%</p>

  <p style="font-family: sofia_proregular">Tabs will have the tick icon for conditions satifiied the ones with the x have something pending.</p>
  <p style="font-family: sofia_proregular">Each tab will guide you on details needed</p>
  <p>Want to edit basic info?</p>

  <router-link
      style="text-decoration: none"
      :to="{name:'developerprofile'}"
      target='_blank'>
    <a-button type="primary"
        >
      Edit basic info
    </a-button>
  </router-link>

</div>
</template>

<script>
export default {
  name: "intro",
  props: {
    score: Number,
  },
}
</script>

<style scoped>

</style>
