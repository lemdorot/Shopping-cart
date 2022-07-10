import React from 'react';
import MyButton from './UI/button/MyButton';

const ProductItem = (props) => {
    return (
        <div className='product'>
          <div className='product__content'>
            <strong>{props.product.id}. {props.product.title}</strong>
            <div>
              {props.product.price}
            </div>
          </div>
          <div className='product__btns'>
            <MyButton onClick={() => props.remove(props.product)}>
              Удалить
            </MyButton>
          </div>
        </div>
    );
};

export default ProductItem;