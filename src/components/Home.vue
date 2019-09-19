<template>
  <div>
        <intro 
           v-scroll-reveal.reset
          :myCompany="company">
        </intro>

        <clients></clients>

        <information></information>

  </div>
</template>

<script>
import Intro from './homeStuff/Intro.vue'
import Information from './homeStuff/Information.vue'
import Clients from './homeStuff/Clients.vue'

export default {
  data() {
    return {
      company: {name: 'Design Net Specific', slogan: 'Own A Website That You Love'}
    }
  },

  components: {
    Intro,
    Information,
    Clients
  }
}
</script>

<style scoped>

</style>