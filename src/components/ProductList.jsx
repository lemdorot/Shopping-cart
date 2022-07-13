import React from 'react';
import ProductItem from './ProductItem';


const ProductList = ({products, title, remove, discount}) => {

    if (!products.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Список пуст!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
                {products.map((product, index) => 
                    <ProductItem key={product.id} 
                    remove={remove} 
                    number={index + 1} 
                    product={product} 
                    discount={discount}/>  
                )}
        </div>
    );
};

export default ProductList;