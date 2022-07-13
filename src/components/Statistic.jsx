import React from 'react';

const Statistic = ({productCounter, products, discount}) => {
    const getSum = (products) => {
        return products.reduce(function(sum, current) {
          return sum + +current.price
        }, 0)
      }

    return (
        <div className='statistic'>
            <p>Добавлено {productCounter} товаров</p>
            <p>Общая сумма: 
              {(discount > 0 && discount <= 100) && getSum(products) > 0 ?
                <span><s style={{color: 'red'}}>{getSum(products)}</s>&nbsp;
                <span style={{color: 'green'}}>{getSum(products) - (getSum(products) / 100 * discount)}</span></span> :
                getSum(products)}
            </p>
        </div>
    );
};

export default Statistic;