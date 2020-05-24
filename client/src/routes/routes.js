import VueRouter from "vue-router";
import Home from "../pages/home";
import Perfil from "../pages/Perfil";
import Login from "../pages/login";
import Cadastrar from "../pages/cadastrar"
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
                path:"/perfil",
                name:"Perfil",
                component:Perfil,
                
            },
            {
                path:"/login",
                name:"Login",
                component:Login,
                
            },
            {
                path:"/cadastrar",
                name:"Cadastrar",
                component:Cadastrar,
                
            }
        ]
    });

export default router;