<template>
    <v-footer
    app
    fixed
    color="#0296CC"
    height="125%"
    class="font-weight-medium"
        >
       
        <v-row align="center">
            <v-col
            class="text-center"
            cols="4"
            >
                <v-btn class="mx-2 mb-5" @click="abreDrawer" fab dark color="#0296CC">
                    <i style="font-size:40px;color:white" class="fas fa-bars"></i>
                </v-btn>
            </v-col>
            <v-col
                class="text-center"
                cols="4"
            >
                <v-btn class="mx-2 mb-5" to="/" fab dark color="#0296CC">
                    <i style="font-size:40px;color:white" class="fas fa-home"></i>
                </v-btn>
            </v-col>
            <v-col
                class="text-center"
                cols="4"
            >
                <v-btn class="mx-2 mb-5" @click="filter" fab dark color="#0296CC">
                    <i style="font-size:40px;color:white" class="fas fa-search"></i>
                </v-btn>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
export default {
  
    data() {
        return {
            drawer: null,
            filter: null

        }
  },
  methods:{
      filte(){
          this.$emit('filter')
      },
      abreDrawer(){
          this.$emit('abreDrawer')
      }
  }
}
</script>