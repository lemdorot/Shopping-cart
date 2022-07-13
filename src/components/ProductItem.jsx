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
              Цена.
              {props.discount > 0 && props.discount <= 100 ?
                <span><s style={{color: 'red'}}>{props.product.price}</s>&nbsp;
                <span style={{color: 'green'}}>{props.product.price - (props.product.price / 100 * props.discount)}</span></span> :
                props.product.price}
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