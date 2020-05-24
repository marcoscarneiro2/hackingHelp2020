<template>

    <v-toolbar 
    color="#0296CC" 
    height="100%" 
    >
 
      <v-img 
      class="mx-auto"
      :src="logo"
      alt=""
      height="90%"
      max-width="5%"
      align-center
      />
    </v-toolbar>

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