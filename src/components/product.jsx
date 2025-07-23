import React from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import"../CSS/product.css";

function Product({name, price,quantity, deleteButton}){  

    return(
       
        <div id="dataShow">
           
            <p id="prodName"><span>Product</span>  : { name}</p>
            <p id="prodPrice"><span>Price</span>  $  { price}</p>
            <p id="prodQuant"><span>QYt</span>  : { quantity}</p>
           { deleteButton}
        
        </div>
        
    )

  
}

export default Product;




