<template>
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
                            <i style="font-size:40px;color:black" class="fas fa-eye"></i>
                        
                    </v-col>
            </v-card>
        </v-app>            
</template>

<script>
export default {
    data: () => ({
        items:[
            {titulo:'titulo',texto:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quam, debitis distinctio officiis sunt ea alias maiores beatae vel et molestiae dolor fugiat neque earum accusantium autem ad unde.'},
            {titulo:'titulo',texto:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quam, debitis distinctio officiis sunt ea alias maiores beatae vel et molestiae dolor fugiat neque earum accusantium autem ad unde.'},
            {titulo:'titulo',texto:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quam, debitis distinctio officiis sunt ea alias maiores beatae vel et molestiae dolor fugiat neque earum accusantium autem ad unde.'},
            {titulo:'titulo',texto:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quam, debitis distinctio officiis sunt ea alias maiores beatae vel et molestiae dolor fugiat neque earum accusantium autem ad unde.'},
        ],
    })
}
</script>