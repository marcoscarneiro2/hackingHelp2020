<template >      
    <v-app class="mt-12">
        <v-card
        class="mt-12"
        width="100%"
        :key="item"
        v-for="item in item"
        >
            <v-col align="center">
                <h1>{{item.titulo}}</h1>
                <span>{{item.texto}}</span> 
                <v-spacer/> 
                <v-btn class="large white--text orange mt-10">Ver</v-btn>
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
        return{
            item:[
                {titulo:'titulo',texto:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quam, debitis distinctio officiis sunt ea alias maiores beatae vel et molestiae dolor fugiat neque earum accusantium autem ad unde.'},
                {titulo:'titulo',texto:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quam, debitis distinctio officiis sunt ea alias maiores beatae vel et molestiae dolor fugiat neque earum accusantium autem ad unde.'},
                {titulo:'titulo',texto:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quam, debitis distinctio officiis sunt ea alias maiores beatae vel et molestiae dolor fugiat neque earum accusantium autem ad unde.'},
                {titulo:'titulo',texto:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quam, debitis distinctio officiis sunt ea alias maiores beatae vel et molestiae dolor fugiat neque earum accusantium autem ad unde.'},
            ],
        }
    }
}    
</script>



  