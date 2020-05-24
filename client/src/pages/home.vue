<template >      
    <v-app>
        <v-row
        align="center" 
        class="mx-auto mt-12">
            <v-header >O que Procura?</v-header>
        </v-row>
        <v-row align="center" >
            <v-btn 
            class="mx-auto" 
            outlined 
            width="80%"
            to="local"
            color="#FF9626">Produtos</v-btn>
        </v-row>
        <v-row align="center">
            <v-btn 
            class="mx-auto mb-auto" 
            outlined
            to="local"
            width="80%"
            color="#FF9626">Serviços</v-btn>
        </v-row>
    </v-app>

</template>
<!--scripts-->
<script>
export default {
    data() {
        
        }
    }    
</script>



  