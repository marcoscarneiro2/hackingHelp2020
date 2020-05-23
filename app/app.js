import Vue from "nativescript-vue";
import Home from "./components/Home";
import Vuex from 'vuex';
Vue.use(Vuex);


new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>      
        `,

    components: {
        Home,
    }
});
new Vue({

    render: h => h('frame', [h(Home)])

}).$start();
