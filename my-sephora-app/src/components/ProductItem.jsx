import { Button } from "@chakra-ui/react";
import React from "react";

const ProductItem = ({ id,
    name,
    price,
    image,
    handledelete})=>{
    return (
        <> 
    <div style={{border:"1px solid gray"}} id={id}>
            <img src={image} alt={name} 
            width="300px" height="300px" />
            <h6>{name} </h6>
            <h6>Price: ${price} </h6>
        <Button onClick={()=>{ handledelete(id)}}>Delete</Button>
        </div>
        </>
    )
}

export default ProductItem;