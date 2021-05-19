<template>
<div>
  <p style="font-family: sofia_proregular">Please input tools you use to achieve each
  </p>
  <p style="font-family: sofia_proregular;text-decoration: underline;text-decoration-color: #1F81CE;">CI/CD tools
  </p>
  <CiTools/>
  <br>
  <p style="font-family: sofia_proregular;text-decoration: underline;text-decoration-color: #1F81CE;">Deployment tools
  </p>
  <Deployment/>
  <br>
  <p style="font-family: sofia_proregular;text-decoration: underline;text-decoration-color: #1F81CE;">Error management tools
  </p>
  <Errors/>
  <br>
  <p style="font-family: sofia_proregular;text-decoration: underline;text-decoration-color: #1F81CE;">Monitoring tools
  </p>
  <Monitoring/>


</div>
</template>

<script>
import CiTools from "@/components/frontend/developer/portfoliocomponents/Devopscomponets/CiTools";
import Errors from "@/components/frontend/developer/portfoliocomponents/Devopscomponets/Errors";
import Deployment from "@/components/frontend/developer/portfoliocomponents/Devopscomponets/Deployment";
import Monitoring from "@/components/frontend/developer/portfoliocomponents/Devopscomponets/Monitoring";
export default {
  name: "Devops",

  components: {
    CiTools,Errors,Deployment,Monitoring
  },

}
</script>

<style scoped>

</style>
