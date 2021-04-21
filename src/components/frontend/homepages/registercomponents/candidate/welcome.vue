<template>
  <a-result title="Great, we are set up!">
    <template #icon>
      <a-icon type="smile" theme="twoTone" />
    </template>
    <template #extra>

      <div style="margin-bottom: 1rem">
        <p style="font-size: 1rem">Lets get you started with some of our jobs</p>
      </div>
      <div style="margin-top: 3rem">
        <a-space>
          <a-button
              icon="left"
              style="margin-left: 8px"
              @click="prev"
          >
            Previous
          </a-button>

          <a-button  type="primary" @click="onComplete">
            <a-icon type="solution" />
            Go to Job board
            <a-icon type="right" />
          </a-button>
        </a-space>
      </div>


    </template>
  </a-result>
</template>

<script>


export default {
  name: "welcome",
  data() {
    return {
      loading: false,




    }
  },

  methods:{
    onComplete() {




      this.loading = true
      this.$router.push({
        name: 'jobs'
      })
      this.loading = false


    },
    prev(){
      this.$store.dispatch('setRegistrationStep', 1)
    },
  }
}
</script>

<style scoped>

</style>
