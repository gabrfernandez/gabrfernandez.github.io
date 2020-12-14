import blogger from "../img/blogger.png"
import blogger2 from "../img/blogger2.png"
import myshop from "../img/myshop.png"
import myshop2 from "../img/myshop2.png"
import moviedb from "../img/moviedb.png"
import moviedb2 from "../img/moviedb2.png"

export const projectState = () => {
    return [
        {
            title:"Blogger",
            mainImg: blogger,
            secondaryImg: blogger2,
            url: "/projects/blogger",
            github:"https://github.com/gabrfernandez/blogger_django",
            deployed:"http://3.19.241.54/",
            details:[
                {
                    title:"Django",
                    description:
                    "Built with Django. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    title:"Server",
                    description:
                    "Built with MySQL. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    title:"AWS ES2",
                    description:
                    "This application is deployed on AWS ES2. Click on the deployed link to see application or on the GitHub link to see code."
                },
            ],
        },

        {
            title:"MyShop",
            mainImg: myshop,
            secondaryImg: myshop2,
            url: "/projects/myshop",
            github:"https://github.com/gabrfernandez/myshop",
            deployed:"tba",
            details:[
                {
                    title:"MERN",
                    description:
                    "An eCommerce project built with MERN STACK. Customers can purchase items and checkout with PayPal or with Credit/Debt Card. Customers can leave a review on a product. Admin can upload/edit products and manage orders."
                },
                {
                    title:"REDUX",
                    description:
                    "This project is built with Redux, a popular application state management library."
                },
                {
                    title:"Heroku",
                    description:
                    "This application is deployed on Heroku. Click on the deployed link to see application or on the GitHub link to see code."
                },
            ],
        },

        {
            title:"MovieDB API",
            mainImg: moviedb,
            secondaryImg: moviedb2,
            url: "/projects/moviedb",
            github:"https://github.com/gabrfernandez/moviedb_api",
            deployed:"https://moviedb-8ae2d.web.app/",
            details:[
                {
                    title:"React",
                    description:
                    "Built with React. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    title:"MovieDB",
                    description:
                    "Built with MovieDB API. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    title:"Firebase",
                    description:
                    "This application is deployed on Firebase. Click on the deployed link to see application or on the GitHub link to see code."
                },
            ],
        },
    ]
}

