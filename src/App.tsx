import React, { useState } from 'react';
import {Product} from './components/product';
import {useProducts} from "./hooks/products";
import {Loader} from "./components/loader";
import {Modal} from "./components/modal";
import {CreateProduct} from "./components/createProduct";
import { IProduct } from './models';


function App() {

    const {loading, products, addProduct} = useProducts()
    const [modal, setModal] = useState(true)

    const createHandler = (product: IProduct) => {
        setModal(false)
        addProduct(product)
    }

    return (
        <div className="container">
            React with TypeScript
            {loading && <Loader/>}
            {products.map(product => <Product product={product} key={product.id}/>)}
            {modal && <Modal title="Create new title">
                <CreateProduct onCreate={createHandler}/>
            </Modal>}
        </div>
)
}

export default App;
