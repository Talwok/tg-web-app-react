import React from 'react';
import './Header.css';
import '../Button/Button.css';
import { useTelegram } from '../../hooks/useTelegram';
import Button from "../Button/Button";

const Header = (props) =>{
    const{user, onClose} = useTelegram();

    return(
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Button;