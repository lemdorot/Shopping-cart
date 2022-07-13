import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const Discount = (props) => {
    const [discount, setDiscount] = useState(0)

    const onChange = (e) => {
        if (e.target.value < 0) e.target.value = 0;
        if (e.target.value > 100) e.target.value = 100;
        setDiscount(e.target.value)
    }

    const cancelDiscount = () => {
        setDiscount(0)
        props.cancelDiscount(discount)
    }

    return (
        <div>
            <div>
            <MyInput 
                value={discount}
                onChange={onChange}
                type="number" 
                placeholder='Скидка' 
            />
            <MyButton onClick={() => props.addDiscount(discount)}>Установить скидку</MyButton>
            </div>
            <MyButton onClick={() => {cancelDiscount()}}>Убрать скидки</MyButton>
        </div>
    );
};

export default Discount;