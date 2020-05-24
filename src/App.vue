<template>
  <v-app id="inspire">
    <NavBar/>
    <router-view/>
    <Footer/>
  </v-app>
</template>
<script>
import NavBar from './components/layout/navbar';
import Footer from './components/layout/footer';
export default {

  name: 'App',
  components:{
    NavBar,
    Footer
  }
}
</script>










