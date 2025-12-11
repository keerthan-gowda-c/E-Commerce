import Carousel from "../../components/Carousel/Carousel";
import './HomePage.css';

function HomePage(){
    return(<>
    <div className="container h-100">
        <div className="row home_carousel">
            <div className="col d-flex flex-column h-100">
            <Carousel/>
            </div>
            <div className="col bg-secondary h-100">
                
            </div>
        </div>
    </div>
    </>
    )
}

export default HomePage;