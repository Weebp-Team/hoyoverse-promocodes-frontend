import React from 'react';
import PropTypes from 'prop-types';
import style from './PromocodeListItem.module.css';

const PromocodeListItem = ({ data }) => {
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
                    width="24"
                    height="24"
                    src="./assets/images/copy_icon.svg"
                    alt="copy"
                />
            </div>
        </div>
    );
};

PromocodeListItem.propTypes = {
    data: PropTypes.objectOf().isRequired,
};
export default PromocodeListItem;
