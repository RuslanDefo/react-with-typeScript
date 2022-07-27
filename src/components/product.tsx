import React, {useState} from 'react';
import {IProduct} from "../models";

interface ProductProps {
    product:IProduct
}

export function Product(props: ProductProps) {
   const [details, setDetails] = useState(false)
    return (
        <div className="prods">
           <h1 className="text">{props.product.title}</h1>
            <img src = {props.product.image} className="imaga"/>

            <button className="showIt"
            onClick={ () => setDetails(!details)}
            >
                {!details && "Show More" }
                { details && "Hide" }
            </button>

            {details && <h2 className="prodsDesc">
                {props.product.description}
                <p>Rate: <span style={{fontWeight: 'bold'}}>{props.product?.rating?.rate}</span></p>
            </h2>
            }
        </div>
    )
}