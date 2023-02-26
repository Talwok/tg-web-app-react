import React, { useCallback, useEffect, useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

const Form = () => {
    const [country, setCountry] = useState();
    const [street, setStreet] = useState();
    const [subject, setSubject] = useState();
    
    const {telegram} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        telegram.sendData(JSON.stringify(data));
    }, []);
    
    useEffect(() => {
        telegram.onEvent( 'mainButtonClicked', onSendData);
        return () => {
            telegram.offEvent( 'mainButtonClicked', onSendData);
        }
    }, []);

    useEffect(() => {
        telegram.MainButton.setParams({
            text: 'Отправить данные'
        });
    }, []);

    useEffect(() => {
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
                <option value={'physical'}>Физ. лицо</option>
                <option value={'leagal'}>Юр. лицо</option>
            </select>

        </div>
    );
};

export default Form;