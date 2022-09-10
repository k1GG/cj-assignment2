import React, {useEffect, useState} from "react";
import "./style.scss"
import productList from "../assets/jsons/products.json"
import Product from "../components/Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
       setProducts(productList)
    },[])
    return(
        <div className='container'>
            <h1>Products</h1>
           <div className="grid">
             {products.map((p) => <Product product={p} />)}
           </div>
        </div>
    )
}

export default Products