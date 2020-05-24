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
import Vuetify from 'vuetify/lib';


Vue.use(VueRouter);
Vue.use(Vuetify)

const router = routes;

Vue.config.productionTip = false;

new Vue({
    icons: {
        iconfont: 'fa',
      },
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount("#app");





