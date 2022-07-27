import React from 'react';
import {Product} from './components/product';
import {useProducts} from "./hooks/products";
import {Loader} from "./components/loader";


function App() {

    const {loading, products} = useProducts()

    return (
        <div className="container">
            React with TypeScript
            { loading && <Loader /> }
            {products.map(product => <Product product={product} key={product.id}/>)}
        </div>

    )
}

export default App;
