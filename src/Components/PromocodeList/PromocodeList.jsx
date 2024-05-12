import React from 'react';
import style from './PromocodeList.module.css';
import PromocodeListItem from './PromocodeListItem';

const PromocodeList = () => {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <PromocodeListItem />
                <PromocodeListItem />
                <PromocodeListItem />
                <PromocodeListItem />
                <PromocodeListItem />
                <PromocodeListItem />
                <PromocodeListItem />
                <PromocodeListItem />
                <PromocodeListItem />
                <PromocodeListItem />
                <PromocodeListItem />
                <PromocodeListItem />
            </div>
        </div>
    );
};

export default PromocodeList;
