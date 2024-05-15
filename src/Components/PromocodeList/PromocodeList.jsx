import React from 'react';
import PropTypes from 'prop-types';
import style from './PromocodeList.module.css';
import PromocodeListItem from './PromocodeListItem';

const PromocodeList = ({ data }) => {
    return (
        <div className={style.container}>
            <div className={style.countGames}>
                <p>Количество промокодов: {data.length}</p>
            </div>
            {data.length !== 0 && (
                <div className={style.box}>
                    {data.map((item) => {
                        return (
                            <PromocodeListItem
                                key={item.id}
                                data={item}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

PromocodeList.propTypes = {
    data: PropTypes.arrayOf().isRequired,
};

export default PromocodeList;
