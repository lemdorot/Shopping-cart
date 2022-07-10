import React, { useState } from 'react';
import MyInput from './components/UI/input/MyInput';
import MyButton from './components/UI/button/MyButton';

const ProductForm = ({create}) => {
    const [product, setProduct] = useState({title: '', price: ''})

    const addNewProduct = (e) => {
        e.preventDefault()
        const newProduct = {
          id: Date.now(), ...product
        }
        console.log(newProduct)
        create(newProduct)
        setProduct({title: '', price: ''})
      }

    return (
        <form>
        <MyInput 
          value={product.title}
          onChange={e => setProduct({...product, title: e.target.value})}
          type="text" 
          placeholder='Название товара' 
        />
        <MyInput 
          value={product.price}
          onChange={e => setProduct({...product, price: e.target.value})}
          type="number" 
          placeholder='Цена товара' 
        />
        <MyButton onClick={addNewProduct}>Создать товар</MyButton>
      </form>
    );
};

export default ProductForm;