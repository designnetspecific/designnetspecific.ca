<template>
  <div id="wrapper">

  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link id="comName" to="/" class="navbar-brand">Design Net Specific</router-link>
        <router-link to="/features" class="navbar-brand">Features</router-link> 
        <router-link to="/contact" class="navbar-brand">Contact Us</router-link> 
      </div>
    </div>
  </nav>

    <div id="whole">
              <router-view></router-view>
    </div>
        <conclusion
          :myCompany="company">
      </conclusion>
  </div>
</template>

<script>
import Conclusion from './components/Conclusion.vue'

export default {
  data() {
    return {
      company: {name: 'Design Net Specific'}
    }
  },
    components: {
      Conclusion
  }
}

</script>

<style scoped>

nav {
  background-color: rgb(36, 53, 109);
  margin-bottom: 15vh;
}

.navbar-brand {
  color: white;
  padding-right:5ch;

}

body {
  background: whitesmoke;
}

#wrapper {
  margin: 0 auto;
  justify-content: center;
}
#whole {
  margin: 0 auto;
  width: 70%;
}

@media (max-width: 1000px) {

      #whole {
            width:90%;
       }

}
</style>