import Carousel from "../../components/Carousel/Carousel";
import './HomePage.css';

const carousel_images =[{


    id:1,
    img_src:'/images/carousel/Camaro.jpg',
    title: "A",
    caption:'a'
},
{


    id:2,
    img_src:'/images/carousel/chevelle.jpg',
    title: "A",
    caption:'b'
},{


    id:1,
    img_src:'/images/carousel/Lamborgini.jpg',
    title: "A",
    caption:'c'
},{


    id:1,
    img_src:'/images/carousel/MP4.jpg',
    title: "A",
    caption:'d'
}
]

const products_list=[
    {
        id:1,
        title:"Engine",
        price:12250,
        img_src:'images/products/Engine.jpg'
    },{
        id:2,
        title:"Gasket",
        price:780,
        img_src:'images/products/gasket.jpg'
    },
    {
        id:3,
        title:"filter",
        price:450,
        img_src:'images/products/filter.jpg'
    },
    {
        id:4,
        title:"piston",
        price:3500,
        img_src:'images/products/piston.jpg'
    }

]

function HomePage(){
    return(<>
    <div className="container h-100">
        <div className="row home_carousel">
            <div className="col d-flex flex-column h-100">
            {/* <Carousel/> */}
            <Carousel images = {carousel_images} />
            </div>
            <div className="col bg-secondary h-100">
                
            </div>
        </div>
    </div>
    </>
    )
}

export default HomePage;