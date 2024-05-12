import React from 'react';
import style from './PromocodeListItem.module.css';

const data = {
    id: 18,
    status: 'unchecked',
    dateCreated: '2024-05-11T22:28:23.136424',
    dateInvalidity: null,
    promocode: 'test',
    game: {
        id: 1,
        name: 'Genshin Impact',
    },
};
const PromocodeListItem = () => {
    return (
        <div className={style.promocodeItem}>
            <div className={style.info}>
                <p>{data.promocode}</p>
                <div className={style.additionalInfo}>
                    <p>
                        created:{' '}
                        {new Date(data.dateCreated).toLocaleDateString()}
                    </p>
                    <p>status: {data.status}</p>
                </div>
            </div>
            <div className={style.copyIcon}>
                <img
                    width="36"
                    height="36"
                    src="./assets/images/copy_icon.svg"
                    alt="copy"
                />
            </div>
        </div>
    );
};

export default PromocodeListItem;
