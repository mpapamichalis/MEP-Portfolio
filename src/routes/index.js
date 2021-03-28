//import Signup from "../containers/Signup";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";


const routes=[
    // {
    //     path:"/auth/signup",
    //     components: Signup,
    //     title:"Sign Up",
    // },

    {
        path:"/home/contact",
        components: Contact,
        title: "Contact",
    },

    {
        path:"/",
        components: Home,
        title: "Home",
    },

    {
        path:"/home/portfolio",
        components: Portfolio,
        title: "Portfolio",
    },
];

export default routes;