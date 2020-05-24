<template>
    <v-app-bar 
    color="#0296CC" 
    height="100%" 
    fixed
    flat
    class="my-auto"
    >
      <v-img 
      class="mx-auto"
      src="https://i.imgur.com/JlHamfi.png" 
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