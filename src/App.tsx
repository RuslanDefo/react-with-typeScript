import React from 'react';
import {Product} from './components/product';
import {useProducts} from "./hooks/products";
import {Loader} from "./components/loader";
import {Modal} from "./components/modal";
import {CreateProduct} from "./components/createProduct";


function App() {

    const {loading, products} = useProducts()

    return (
        <div className="container">
            React with TypeScript
            {loading && <Loader/>}
            {products.map(product => <Product product={product} key={product.id}/>)}
            <Modal title="Create new title">
                <CreateProduct />
            </Modal>
        </div>
)
}

export default App;
