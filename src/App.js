import React, {useState} from 'react';
import './styles/App.css';
import ProductForm from './ProductForm';
import ProductList from './components/ProductList';
import Statistic from './components/Statistic';

function App() {

  const [products, setProducts] = useState([])
  const [productCounter, setProductCounter] = useState(0);

  const createProduct = (newProduct) => {
    setProducts([...products, newProduct])
    setProductCounter(productCounter + 1)
  }

  const removeProduct = (post) => {
    setProducts(products.filter(p => p.id !== post.id))
  }

  return (
    <div>
      <ProductForm create={createProduct}/>
      <ProductList remove={removeProduct} products={products} title="Продукты"/>
      <Statistic productCounter={productCounter} products={products}/>
    </div>
  );
}

export default App;
