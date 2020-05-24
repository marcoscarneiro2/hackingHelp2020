import VueRouter from "vue-router";

import Home from "../pages/home";



const router = new VueRouter({
    // rotas
    // precisa importar a página que vai ser referida a rota
    
        routes:[
           
            {
                path:"/",
                name:"Home",
                component:Home,
                
            }
        ]
    });

export default router;