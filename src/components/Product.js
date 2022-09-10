import React from "react";
import "./style.scss"

const Rating = ({rating}) => {
   return (
     <div className="star-rating">
        {[...Array(rating)].map((star) => {
            return (
                <span className="star" key={star} >&#9733;</span>
            )
        })}
     </div>
   )

}

const Product = ({product}) => {
    return(
        <div className="product">
            <img  className="product-image" src={`/images/${product.image}`} alt="" />
            <div className="product-info">
                <div className="product-info-left">
                    <h4>{product.name}</h4>
                    <h5>₹{product.price}</h5>
                </div>
                <div className="product-info-right">
                   <Rating  rating={product.rating}/>
                </div>
            </div>
        </div>
    )

}

export default Product