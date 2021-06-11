<template>
  <div >




    <Portfolio/>


      <br>










  </div>

</template>

<script>

import Portfolio from "@/components/frontend/developer/portfoliocomponents/Designs";
export default {
  name: "Skills",

  data() {
    return {

      activeKey: ['1'],
      activeKey2: ['1'],
    };
  },
  components: {
    Portfolio


  },

}
</script>

<style scoped>
.cardshadow {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}

</style>
