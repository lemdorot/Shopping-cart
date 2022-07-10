import React from 'react';
import MyButton from './UI/button/MyButton';

const ProductItem = (props) => {
    return (
        <div className='product'>
          <div className='product__content'>
            <div>
              <strong>Id. {props.product.id}</strong>
              <p className='product__title'>Название. {props.product.title}</p>
            </div>
            <div>
              Цена.{props.product.price}
            </div>
          </div>
          <div className='product__btn'>
            <MyButton onClick={() => props.remove(props.product)}>
              Удалить
            </MyButton>
          </div>
        </div>
    );
};

export default ProductItem;