import React from 'react';
import { useCookies } from 'react-cookie';
import style from './LogoutButton.module.css';


const LogoutButton = () => {

    const [removeCookie] = useCookies();

    return (
        <button
            className={style.authorizationLink}
            type="button"
            onClick={() => {
                removeCookie('id', {path:'/'});
                removeCookie('token', {path:'/'});
            }}>
            Выйти
        </button>
    );
};

export default LogoutButton;
