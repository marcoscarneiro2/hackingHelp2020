<template>
  <v-app id="lingo">
    <NavBar/>
    <v-content>
       <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-center">Lingo</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view/>
    </v-content>
    <Footer @abreDrawer="abreDrawer"/>
  </v-app>
</template>
<script>
import NavBar from './components/layout/navbar';
import Footer from './components/layout/footer';
export default {
  data(){
    return{
      drawer:null,
      items: [
          { title: 'Perfil', link:'/perfil' },
          { title: 'Favoritos', link:'/' },
          { title: 'Perto de Você', link:'/' },
          { title: 'Histórico', link:'/'},
          { title: 'Logar', link:'/login'}
        ]
    }
  },
  name: 'App',
  components:{
    NavBar,
    Footer
  },
  methods:{
    abreDrawer(){
      this.drawer=!this.drawer
    }
  }
}
</script>










