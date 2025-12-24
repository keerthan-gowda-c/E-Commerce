import './ProductCard.css';

const ProductCard =({product})=>{
  return(
<div className="card">
    <img src={product.img_src} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">Rs.{product.price}</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
    <div className='button d-flex justify-content-between'>
      <button className='btn btn-warning'>Add To Cart</button>
      <button className='btn btn-success'>Buy Now</button>

    </div>
  </div>
  )

}
export default ProductCard;
