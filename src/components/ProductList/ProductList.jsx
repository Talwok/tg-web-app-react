import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';

const products = [
    {id: '1', title: 'Джоггеры', price: 2000, description: 'Синего цвета'},
    {id: '2', title: 'Куртка', price: 5000, description: 'Тёмного цвета, кожанная'},
    {id: '3', title: 'Очки', price: 500, description: 'Жёлтые линзы, RayBan'},
    {id: '4', title: 'Бандана', price: 400, description: 'Красного цвета, с узором'},
    {id: '5', title: 'Кроссовки', price: 3000, description: 'Белого цвета, дышащие'},
    {id: '6', title: 'Перчатки', price: 1000, description: 'Тёмного цвета, кожаные'}
]

const getTotalPrice = (items) =>{
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0);
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);

    const {telegram} = useTelegram();

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded){
            newItems = addedItems.filter(item => item.id !== product.id);
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
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem 
                    product={item}
                    onAdd={onAdd}
                    className={'item'}/>
            ))}
        </div>
    );
};

export default ProductList;