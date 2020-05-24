import VueRouter from "vue-router";

import Home from "../pages/home";
import Local from "../pages/local";


const router = new VueRouter({
    // rotas
    // precisa importar a página que vai ser referida a rota
    
        routes:[
           
            {
                path:"/",
                name:"Home",
                component:Home,
                
            },
            {
                path:"/local",
                name:"Local",
                component:Local,
                
            }
        ]
    });

export default router;