import Carousel from "../../components/Carousel/Carousel";
import './HomePage.css';
import { products_list } from "../../data/products";
import { carousel_images } from "../../data/carousel_image";
import  ProductCard  from "../../components/ProductCard/ProductCard";




function HomePage() {
    return (<>
        <div className="container h-100">
            <div className="row home_carousel">
                <div className="col d-flex flex-column h-100">
                    {/* <Carousel/> */}
                    <Carousel images={carousel_images} />
                </div>
                <div className="col bg-secondary h-100">
                    <Carousel images={products_list} />
                </div>

                <div className="cards row row-cols-1 row-cols-md-4 g-4">
                    {
                        products_list.map((product, index) => (
                            <ProductCard product={product} key={product.id} />
                        )
                        )
                    }
                </div>

                {/* <div class="card-group">
  <div class="card">
    <img src="/images/products/Engine.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  </div> */}
            </div>
        </div>
    </>
    )
}

export default HomePage;