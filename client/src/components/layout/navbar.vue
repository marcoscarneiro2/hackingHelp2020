<template>

    <v-app-bar 
    color="#0296CC" 
    height="100%" 
    fixed
    >
      <v-img 
      class="mx-auto"
      :src="logo" 
      height="100%"
      max-width="55%"
      align-center
      />
    </v-app-bar>

</template>

<script>
import logo from "../../assets/LINGO.png"
export default {
    name:"NavBar",
    data() {
      return {
        logo
  
      }
    }
}
</script>