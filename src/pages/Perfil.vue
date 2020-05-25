<template >      
    <v-app class="mt-12">
        <v-card
        class="mt-12"
        :elevation="0"
        >
                <v-row justify="center" class="mt-12"> 
                    <v-avatar color="#422321" size="180">
                        <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                    </v-avatar>
                </v-row>
                <v-col align="left" class="text-center">
                    <h3 class="display-1 mt-10 mb-6 bold orange--text">TITULO</h3>
                    <v-spacer/>
                    <span class="headline ">NOME</span>
                    <v-spacer/>
                    <span class="headline ">PESSOA</span>
                    <v-spacer/>
                    <p class="headline ">CPF/CNPJ</p>
                    <v-spacer/>
                    <h3 class="display-1 mt-5 bold orange--text">CATEGORIA :</h3>
                    <v-spacer/>
                    <span class="headline">Endereço</span>
                    <v-spacer/>
                    <span class="headline">Telefone</span>
                    <v-spacer/>
                    <span class="headline">Email</span>
                   </v-col>
        </v-card>  
    </v-app> 
</template>

<!--STYLE-->
<style>
</style>

<!--scripts-->
<script>
export default {
    data() {
        return{}
    }
}    
</script>



  