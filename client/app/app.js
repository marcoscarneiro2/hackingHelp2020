import Vue from "nativescript-vue";

import Home from "./components/pages/Home";

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
