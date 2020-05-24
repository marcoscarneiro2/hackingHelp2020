import VueRouter from "vue-router";

import Home from "../pages/home";
import Local from "../pages/local";
import Perfil from "../pages/Perfil";
import Pesquisa from "../pages/pesquisa";
import Login from "../pages/login";

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
                
            },
            {
                path:"/perfil",
                name:"Perfil",
                component:Perfil,
                
            },{
                path:"/pesquisa",
                name:"Pesquisa",
                component:Pesquisa,
                
            },{
                path:"/login",
                name:"Login",
                component:Login,
                
            }
        ]
    });

export default router;