<template>
       <v-footer
      fixed
      color="#0296CC"
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
    
  }),    
}
</script>