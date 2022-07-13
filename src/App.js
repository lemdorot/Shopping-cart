import React, {useState} from 'react';
import './styles/App.css';
import ProductForm from './ProductForm';
import ProductList from './components/ProductList';
import Statistic from './components/Statistic';
import Discount from './components/Discount';

function App() {

  const [products, setProducts] = useState([])
  const [productCounter, setProductCounter] = useState(0);
  const [discount, setDiscount] = useState(0);

  const createProduct = (newProduct) => {
    setProducts([...products, newProduct])
    setProductCounter(productCounter + 1)
  }

  const removeProduct = (post) => {
    setProducts(products.filter(p => p.id !== post.id))
  }
  
  const addDiscount = (discount) => {
    setDiscount(discount);
  }

  const cancelDiscount = (discount) => {
    setDiscount(discount);
  }

  return (
    <div className='wrapper'>
      <ProductForm create={createProduct}/>
      <ProductList remove={removeProduct} products={products} discount={discount} title="Продукты"/>
      <Statistic productCounter={productCounter} products={products} discount={discount}/>
      <Discount addDiscount={addDiscount} cancelDiscount={cancelDiscount}/>
    </div>
  );
}

export default App;
