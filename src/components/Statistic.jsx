import React from 'react';

const Statistic = ({productCounter, products}) => {
    const getSum = (products) => {
        return products.reduce(function(sum, current) {
          return sum + +current.price
        }, 0)
      }

    return (
        <div className='statistic'>
            <p>Добавлено {productCounter} товаров</p>
            <p>Общая сумма: {getSum(products)}</p>
        </div>
    );
};

export default Statistic;