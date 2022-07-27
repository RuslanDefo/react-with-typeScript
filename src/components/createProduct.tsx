import React, {useState} from 'react';
import {IProduct} from "../models";
import axios from "axios";

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 15
    }
}

interface createProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct( {onCreate}: createProductProps) {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(event.target.value)

    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="formInpt"
                placeholder="Enter product title..."
                value={value}
                onChange={changeHandler}
            />
            {error && <p>{error}</p>}
            <button className="showIt" type="submit">Create</button>
        </form>
    );
}

