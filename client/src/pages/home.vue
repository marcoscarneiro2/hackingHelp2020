<template>
     <v-window v-model="step">
      <v-window-item :value="1">
        <v-app>
            <v-row
            align="center" 
            class="mx-auto mt-12">
                <h1 >O que Procura?</h1>
            </v-row>
            <v-row align="center" >
                <v-btn 
                class="mx-auto" 
                outlined 
                width="80%"
                @click="produto()"
                color="#FF9626">Produtos</v-btn>
            </v-row>
            <v-row align="center">
                <v-btn 
                class="mx-auto mb-auto" 
                outlined
                @click="servico()"
                width="80%"
                color="#FF9626">Serviços</v-btn>
            </v-row>
        </v-app>
      </v-window-item>
      <v-window-item :value="2">
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
                    v-on:change="getMunicipiosByUF()"
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
            <v-row align="center">
                <v-btn 
                class="mx-auto my-5" 
                outlined
                @click="submit()"
                width="80%"
                color="#FF9626">Pesquisar</v-btn>
            </v-row>
             <v-row align="center">
                <v-btn 
                class="mx-auto mb-auto" 
                outlined
                @click="back()"
                width="80%"
                color="#FF9626">Voltar</v-btn>
            </v-row>
        </v-container> 
      </v-window-item>
      <v-window-item :value="3">
         <v-app class="mt-12">
            <v-card
            class="mt-12"
            width="100%"
            v-for="item in items"
            v-bind:key="item.titulo"
            >
            <v-col align="center">
                <h1>{{item.titulo}}</h1>
                <span>{{item.texto}}</span> 
                <v-spacer/> 
                <v-btn class="large white--text orange mt-10">Ver</v-btn>
            </v-col>
        </v-card>
    </v-app> 
      </v-window-item>
    </v-window>
</template>
<script>
import axios from'axios';
  export default {
    data: () => ({
        items:[
                {titulo:'titulo',texto:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quam, debitis distinctio officiis sunt ea alias maiores beatae vel et molestiae dolor fugiat neque earum accusantium autem ad unde.'},
                {titulo:'titulo',texto:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quam, debitis distinctio officiis sunt ea alias maiores beatae vel et molestiae dolor fugiat neque earum accusantium autem ad unde.'},
                {titulo:'titulo',texto:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quam, debitis distinctio officiis sunt ea alias maiores beatae vel et molestiae dolor fugiat neque earum accusantium autem ad unde.'},
                {titulo:'titulo',texto:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quam, debitis distinctio officiis sunt ea alias maiores beatae vel et molestiae dolor fugiat neque earum accusantium autem ad unde.'},
            ],
        pesquisa: null,
        step: 1,
        uf:"",
        ufs:[],
        municipios:[]
    }),
    methods:{
            getUf(){
                axios.get('https://us-central1-hackingriolingo.cloudfunctions.net/lingo/getUfs')
                .then(response => {
                    this.ufs = response.data
                }) 
            },
            getMunicipiosByUF() {
                axios.post('https://us-central1-hackingriolingo.cloudfunctions.net/lingo/getMunicipiosPorUF',{uf:this.uf})
                .then(response => {
                    this.municipios = response.data
                })
            },
            produto(){
                this.pesquisa = "product";
                this.getUf()
                this.step++
            },
            servico(){
                this.pesquisa = "service",
                this.getUf()
                this.step++
            },
            submit(){
                if(this.pesquisa == "product"){
                    axios.get()
                }
                if(this.pesquisa == "service"){
                    axios.get()
                }
                this.step++
            },
            back(){
                this.step--
            }
    },
  }
</script>
    
