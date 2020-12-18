import blogger from "../img/blogger.png"
import bloggerGif from "../img/bloggerGif.gif"
import myshop from "../img/myshop.png"
import myshopGif from "../img/myshopGif.gif"
import moviedb from "../img/moviedb.png"
import moviedbGif from "../img/moviedbGif.gif"


export const projectState = () => {
    return [
        {
            title:"Blogger",
            mainImg: blogger,
            secondaryImg: bloggerGif,
            url: "/projects/blogger",
            github:"https://github.com/gabrfernandez/blogger_django",
            deployed:"http://3.19.241.54/",
            details:[
                {
                    title:"OVERVIEW",
                    description:
                    "This is a blog app where users can post and view blog posts about certain categories. Users have full CRUD functionality on their posts. Implemented user login/registration. Users can also interact with each other by leaving comments on specific posts. The app displays feature posts/categories. App also includes admin functionality. "
                },
                {
                    title:"TECHNOLOGIES",
                    description:
                    "Built with Django, MySQL, Bootstrap, Crispy Forms, Pillow, FontAwesome, & Recaptcha."
                },
                {
                    title:"DEPLOYMENT",
                    description:
                    "This application is deployed on AWS ES2. Click on the deployed link to see application or on the GitHub link to see code."
                },
            ],
        },

        {
            title:"MyShop",
            mainImg: myshop,
            secondaryImg: myshopGif,
            url: "/projects/myshop",
            github:"https://github.com/gabrfernandez/myshop",
            deployed:"https://myshopgabe.herokuapp.com/",
            details:[
                {
                    title:"OVERVIEW",
                    description:
                    "This is a full functional eCommerce app built using the MERN STACK. Customers can purchase items and checkout with PayPal or with Credit/Debt Card. Customers can leave a review on a product. Admin can upload/edit products and manage orders."
                },
                {
                    title:"TECHNOLOGIES",
                    description:
                    "Built with: React, Redux, MongoDB Atlas, Mongoose, Express, Node, Bcrypt, JSONWebToken, Bootstrap, & PayPal. "
                },
                {
                    title:"DEPLOYMENT",
                    description:
                    "This application is deployed on Heroku. Click on the deployed link to see application or on the GitHub link to see code."
                },
            ],
        },

        {
            title:"MovieDB API",
            mainImg: moviedb,
            secondaryImg: moviedbGif,
            url: "/projects/moviedb",
            github:"https://github.com/gabrfernandez/moviedb_api",
            deployed:"https://moviedb-8ae2d.web.app/",
            details:[
                {
                    title:"OVERVIEW",
                    description:
                    "Users can search movies by utilizing MovieDB API. The detail page displays key details about the movie, including poster backdrops and a trailer. The Home page loads popular, upcoming, and new movies."
                },
                {
                    title:"TECHNOLOGIES",
                    description:
                    "Built with React, Redux, Axios, Framer Motion, Styled Components, & MovieDB API. "
                },
                {
                    title:"DEPLOYMENT",
                    description:
                    "This application is deployed on Firebase. Click on the deployed link to see application or on the GitHub link to see code."
                },
            ],
        },
    ]
}

