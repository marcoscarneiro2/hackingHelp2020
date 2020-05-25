<template>
    <app class="mt-12">
            <v-parallax
                dark
                src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                height="300"
                width="100%"
            >
                <v-row
                    align="end"
                    justify="center"
                    >
                    <v-col class="text-center" cols="12">
                        <h1 class="display-2 font-weight-thin mb-4">Titulo</h1>
                    </v-col>
                </v-row>    
            </v-parallax>
            <v-card
            :elevation="0"
            height="600"
            class="mt-6">
                <v-text
                class="headline text-justify text-center" color="grey">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam inventore similique doloribus aperiam a eveniet ullam dolores, totam eos eum, iusto, aliquid maiores earum libero rem mollitia architecto. Ipsum, ratione.
                </v-text>
                <v-text
                class="headline text-justify text-center" color="grey">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam inventore similique doloribus aperiam a eveniet ullam dolores, totam eos eum, iusto, aliquid maiores earum libero rem mollitia architecto. Ipsum, ratione.
                </v-text>
                <v-text
                class="headline text-justify text-center" color="grey">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam inventore similique doloribus aperiam a eveniet ullam dolores, totam eos eum, iusto, aliquid maiores earum libero rem mollitia architecto. Ipsum, ratione.
                </v-text>
            </v-card>

            
    </app>
</template>

<script>
export default {
    data(){

    }
}
</script>