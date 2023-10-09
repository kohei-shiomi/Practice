<template>
  <v-app class="rounded rounded-md">
    <Header/>
    <v-main>
      <!-- <Top/> -->
      <router-view/>
    </v-main>

  </v-app>
</template>



<script>
import Header from './components/Header.vue'
// import Top from './components/Top.vue'
// import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    Header,
    // Top,
    // About,
  },
  data() {
    return {
      drawer: false,
      tab: null,
      
      
    }
  },

}

</script>


