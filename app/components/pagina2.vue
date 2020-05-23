<template>
    <page>
        <label text="bem vindo a pagina 2"></label>
        
        <Button text="Button" @tap="showItem" />

         
    </page>

</template>

<script>
  import navBottom from "./layout/navBottom";
import home from './Home.vue';

    export default {
      components: {
    navBottom
      },
  methods:{
    showItem(payload) {
			this.$navigateTo(home);
      }
    }
  }
</script>
