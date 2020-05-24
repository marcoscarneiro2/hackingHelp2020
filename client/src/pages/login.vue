<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="#0296CC" 
                dark
                flat
              >
                <v-toolbar-title>Logar-se</v-toolbar-title>
               
              </v-toolbar>
              <v-card-text>
                  <v-text-field
                    label="Email"
                    v-model="email"
                    prepend-icon='fas fa-user'
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    label="Senha"
                    v-model="password"
                    prepend-icon="fas fa-lock"
                    type="password"
                  ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-row align="center" justify="center">
                    <v-btn align="center" @click="submit" color="#0296CC" >Logar</v-btn>
                </v-row>

              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
       <v-row align="center"
        justify="center">
            <v-btn color="#0296CC"  to="/cadastrar">Cadastrar</v-btn>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
  export default {
    data(){
      return {
        email:null,
        password:null
      }
    },
    methods:{
      submit(){
        firebase.auth()
      .signInWithEmailAndPassword(this.form.email, this.form.password)
      .then(data => {
        this.$store.account = data;
        this.$router.replace({name: "Perfil"});
      })
      .catch(err => {
        this.error = err.message;
      });
      }
    }

  }
</script>