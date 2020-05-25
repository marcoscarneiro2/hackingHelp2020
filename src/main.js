import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
//Dependencia das Rotas
import routes from "./routes/routes";
import vuetify from './plugins/vuetify';
//Dependencia do Vuex
import store from './store';
//Import icones
import '@fortawesome/fontawesome-free/css/all.css';

import * as firebase from "firebase";
Vue.use(VueRouter);

const router = routes;

Vue.config.productionTip = false;
const configOption = {
    apiKey: "AIzaSyA1w4JF_TgWQT-T8fn91i-P13FJKnALAIk",
    authDomain: "hackingriolingo.firebaseapp.com",
    databaseURL: "https://hackingriolingo.firebaseio.com",
    projectId: "hackingriolingo",
    storageBucket: "hackingriolingo.appspot.com",
    messagingSenderId: "407947899698",
    appId: "1:407947899698:web:d202ba2cc6d9d757ac9d2b",
    measurementId: "G-EJCERG3CNE"
};
firebase.initializeApp(configOption);
firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });
new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount("#app");





