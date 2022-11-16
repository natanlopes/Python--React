import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
const Product = () => {
     const {id} = useParams();
     const [product, setProduct] = useState([]);
     const [loading, setLoading] = useState(false);

     useEffect(() =>{
         const getProduct =  async() =>{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
     }
     getProduct();
    },[input]);
    return (
        <div>
          
        </div>
    );
}
export default Product;