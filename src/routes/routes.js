import VueRouter from "vue-router";

import pesquisa from "../pages/pesquisa";
import Perfil from "../pages/Perfil";
import login from "../pages/login";


const router = new VueRouter({
    // rotas
    // precisa importar a página que vai ser referida a rota
    
        routes:[
           
            {
                path:"/pesquisa",
                name:"pesquisa",
                component:pesquisa,
                
            },
            {
                path:"/Perfil",
                name:"Perfil",
                component:Perfil,
            },

            {
                path:"/login",
                name:"login",
                component:login,
            }
            
        ]
    });

export default router;