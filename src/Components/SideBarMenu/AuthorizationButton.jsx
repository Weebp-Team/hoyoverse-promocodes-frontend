import React from 'react';
import { Link } from 'react-router-dom';
import style from './AuthorizationButton.module.css';

// const clientId = 51921601;
// const redirectUri = 'https://localhost/vk';
// const link = `https://oauth.vk.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&display=page&response_type=code`;
const link2 = '/vk?code=12345';

const AuthorizationButton = () => {
    return (
        <Link
            className={style.authorizationLink}
            to={link2}>
            Авторизоваться
        </Link>
    );
};

export default AuthorizationButton;
