import React from 'react';
import Button from '../Button/Button';
import './ProductItem.css';

const ProductItem = ({product, className, onAdd}) => {
    
    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'img'}></div>
            <div className={'title'}>
                <span>Заголовок: <b>{product?.title}</b></span>
            </div>
            <div className={'description'}>
                <span>Описание: <b>{product?.description}</b></span>
            </div>
            <div className={'price'}>
                <span>Стоимость: <b>{product?.price}</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
    );
    
};

export default ProductItem;