import React, { useEffect } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

const Form = () => {
    const [country, setCountry] = useState();
    const [street, setStreet] = useState();
    const [subject, setSubject] = useState();
    const {telegram} = useTelegram();

    useEffect(()=>{
        telegram.MainButton.setParams({
            text: 'Отправить данные',

        })
    }, []);

    useEffect(()=>{
        if(!street || !country){
            telegram.MainButton.hide();
        }else{
            telegram.MainButton.show();
        }
    }, [country, street]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    }
    
    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    }

    return (
        <div className='form'>
            <h3>Введите ваши данные</h3>
            <input 
                className={'input'} 
                type="text" 
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />

            <input 
                className={'input'} 
                type="text" 
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
            />

            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value={'leagal'}>Юр. лицо</option>
                <option value={'physical'}>Физ. лицо</option>
            </select>

        </div>
    );
};

export default Form;