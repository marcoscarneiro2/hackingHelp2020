<template >      
    <v-container class="mt-12">
            <v-row align="center"
            justify="center"
            class="mt-12">
                <h1>Aonde?</h1>
            </v-row>
            <v-row align="center"
            class="my-0">
                <v-col cols="3">
                    <v-subheader>UF:</v-subheader>
                </v-col>
                <v-col cols="9">
                    <v-select
                    filter
                    :change="getMunicipios()"
                    v-model="uf" 
                    :items="ufs"
                        />
                </v-col>
            </v-row>
            <v-row align="center"
            class="my-0">
                <v-col cols="3">
                    <v-subheader>Município:</v-subheader>
                </v-col>
                <v-col cols="9">
                    <v-select 
                    :items="municipios"/>
                </v-col>
            </v-row>
            <v-row align="center"
            class="my-0">
                <v-col cols="3">
                    <v-subheader>Bairro:</v-subheader>
                </v-col>
                <v-col cols="9">
                    <v-select 
                    :items="bairro"/>
                </v-col>
            </v-row>
            <v-row align="center">
                <v-btn 
                class="mx-auto mb-auto" 
                outlined
                width="80%"
                color="#FF9626">Pesquisar</v-btn>
            </v-row>
    </v-container> 
</template>

<!--STYLE-->
<style>
</style>

<!--scripts-->
<script>
import axios from "axios";
export default {
    data() {
        return {
            uf:"",
            ufs:[],
            municipios:[],
            bairro:[]
            }
        },
       
        mounted() {
                axios.get('https://us-central1-hackingriolingo.cloudfunctions.net/lingo/getUfs')
                .then(response => {
                    this.ufs = response.data
                })
            
        },
        methods:{
            getMunicipios(){
                axios.get('').then()
            }
            }
        }
            
</script>

