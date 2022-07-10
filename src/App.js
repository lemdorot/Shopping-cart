import React, {useState} from 'react';
import './styles/App.css';
import ProductForm from './ProductForm';
import ProductList from './components/ProductList';

function App() {

  const [products, setProducts] = useState([])

  const createProduct = (newProduct) => {
    setProducts([...products, newProduct])
    console.log(products)
  }

  const removeProduct = (product) => {
    setProducts(products.filter(p => p.id !== product.id))
  }

  return (
    <div>
      <ProductForm create={createProduct}/>
      <ProductList remove={removeProduct} products={products} title="Продукты"/>
    </div>
  );
}

export default App;
