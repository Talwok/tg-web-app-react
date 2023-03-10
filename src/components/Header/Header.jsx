import React from 'react';
import './Header.css';
import { useTelegram } from '../../hooks/useTelegram';
import Button from "../Button/Button";

const Header = (props) =>{
    
    const{user, onClose} = useTelegram();

    return(
        <div className={'header'}>
            <Button className={'closebutton'} onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;