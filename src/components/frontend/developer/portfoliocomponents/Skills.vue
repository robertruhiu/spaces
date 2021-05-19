<template>
  <div style="overflow-y: scroll;padding: 1%;height: 70vh;">
    <div v-if="$store.state.skills.length === 0" style="padding: 2%">
      <a-empty
          image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
          :image-style="{
      height: '60px',
    }"
      >
        <span slot="description"> Please pick your proficiency on the right either as developer,designer,product manager or devops </span>

      </a-empty>
    </div>
    <div v-if="$store.state.skills.includes('developer')">
      <a-collapse class="cardshadow" style="border: 1px solid #e8e8e8" bordered="false" v-model="activeKey" >
        <a-collapse-panel key="1" >
          <span style="font-family: sofia_proregular;font-size: 16px" slot="header">Projects</span>
          <Projects/>
        </a-collapse-panel>


      </a-collapse>
      <br>

    </div>




    <div v-if="$store.state.skills.includes('designer')">
      <a-collapse class="cardshadow" style="border: 1px solid #e8e8e8" bordered="false" v-model="activeKey2" >
        <a-collapse-panel key="1" >
          <span style="font-family: sofia_proregular;font-size: 16px" slot="header">Designs projects</span>
          <Designs/>
        </a-collapse-panel>


      </a-collapse>


      <br>
    </div>

    <div v-if="$store.state.skills.includes('product')">
      <a-card  class="cardshadow" >
        <span style="font-family: sofia_proregular" slot="title">Product Management skills</span>

        <Product/>
      </a-card>
      <br>
    </div>

    <div v-if="$store.state.skills.includes('devops')">
      <a-card  class="cardshadow" >
        <span style="font-family: sofia_proregular" slot="title">Devops</span>

        <Devops/>
      </a-card>
    </div>





  </div>

</template>

<script>
import Devops from "@/components/frontend/developer/portfoliocomponents/Devops";
import Product from "@/components/frontend/developer/portfoliocomponents/Product";
import Projects from "@/components/frontend/developer/portfoliocomponents/Projects";
import Designs from "@/components/frontend/developer/portfoliocomponents/Designs";
export default {
  name: "Skills",

  data() {
    return {

      activeKey: ['1'],
      activeKey2: ['1'],
    };
  },
  components: {
    Devops,Product,Projects,
    Designs


  },

}
</script>

<style scoped>
.cardshadow {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1890ff;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #91d5ff;
}
</style>
