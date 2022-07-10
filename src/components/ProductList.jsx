import React from 'react';
import ProductItem from './ProductItem';


const ProductList = ({products, title, remove}) => {

    if (!products.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Продукты не найдены!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
                {products.map((product, index) => 
                    <ProductItem remove={remove} number={index + 1} product={product} />  
                )}
        </div>
    );
};

export default ProductList;