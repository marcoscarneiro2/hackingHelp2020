import VueRouter from "vue-router";

import Home from "../pages/home";
import Local from "../pages/local";
import Perfil from "../pages/Perfil";
import stories from "../pages/stories";
import Login from "../pages/login";
import cadastroUser from "../pages/cadastroUser";
import cadastroBus from "../pages/cadastroBus";




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
                path:"/stories",
                name:"stories",
                component:stories,
                
            },{
                path:"/login",
                name:"Login",
                component:Login,
                
            }
            ,{
                path:"/cadastroUser",
                name:"cadastroUser",
                component:cadastroUser,
                
            }
            ,{
                path:"/cadastroBus",
                name:"cadastroBus",
                component:cadastroBus,
                
            }
        ]
    });

export default router;