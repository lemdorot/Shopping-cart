import React, { useState } from 'react';
import MyInput from './components/UI/input/MyInput';
import MyButton from './components/UI/button/MyButton';

const ProductForm = ({create}) => {
    const [product, setProduct] = useState({title: '', price: ''})
    const [titleError, setTitleError] = useState('')
    const [priceError, setPriceError] = useState('')

    const addNewProduct = (e) => {
      e.preventDefault()
      if(product.title !== '' && product.price !== ''){
        const newProduct = {
          id: Date.now(), ...product
        }
        create(newProduct)
        setProduct({title: '', price: ''})
      }
    }

    const titleHandler = (e) => {
      setProduct({...product, title: e.target.value})
      if (e.target.value === '') {
        setTitleError('Название не может быть пустым')
      } else {
        setTitleError('')
      }
    }

    const priceHandler = (e) => {
      setProduct({...product, price: e.target.value})
      if (e.target.value === '') {
        setPriceError('Цена не может быть пустой')
      } else {
        setPriceError('')
      }
    }

    return (
        <form>
        {(titleError) && <div style={{color: 'red'}}>{titleError}</div>}
        <MyInput 
          value={product.title}
          onChange={titleHandler}
          type="text" 
          placeholder='Название товара' 
        />
        {(priceError) && <div style={{color: 'red'}}>{priceError}</div>}
        <MyInput 
          value={product.price}
          onChange={priceHandler}
          type="number" 
          placeholder='Цена товара' 
        />
        <MyButton onClick={addNewProduct}>Создать товар</MyButton>
      </form>
    );
};

export default ProductForm;