import React, {useState, useEffect, useCallback} from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';

const products = [
    {key: '1', title: 'Джоггеры', price: 2000, description: 'Синего цвета'},
    {key: '2', title: 'Куртка', price: 5000, description: 'Тёмного цвета, кожанная'},
    {key: '3', title: 'Очки', price: 500, description: 'Жёлтые линзы, RayBan'},
    {key: '4', title: 'Бандана', price: 400, description: 'Красного цвета, с узором'},
    {key: '5', title: 'Кроссовки', price: 3000, description: 'Белого цвета, дышащие'},
    {key: '6', title: 'Перчатки', price: 1000, description: 'Тёмного цвета, кожаные'},
];

const getTotalPrice = (items) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0);
}

const ProductList = () => {

    const [addedItems, setAddedItems] = useState([]);

    const {telegram, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId
        }

        fetch('http://5.178.85.176:8000/pos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
    }, [addedItems, queryId]);
    
    useEffect(() => {
        telegram.onEvent('mainButtonClicked', onSendData);
        return () => {
            telegram.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData]);

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.key === product.key);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.key !== product.key);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if(newItems.length === 0) {
            telegram.MainButton.hide();
        } else {
            telegram.MainButton.show();
            telegram.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            });
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (<ProductItem product={item} className={'item'} onAdd={onAdd}/>))}
        </div>
    );
};

export default ProductList;