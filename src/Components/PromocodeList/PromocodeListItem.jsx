import React from 'react';
import PropTypes from 'prop-types';
import 'react-notifications/lib/notifications.css';
import {
    NotificationContainer,
    NotificationManager,
} from 'react-notifications';
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
            <button
                type="button"
                className={style.copyIcon}
                onClick={() => {
                    NotificationManager.success('Промокод скопирован!');
                    navigator.clipboard.writeText(data.promocode);
                }}>
                <img
                    width="24"
                    height="24"
                    src="./assets/images/copy_icon.svg"
                    alt="copy"
                />
            </button>
            <NotificationContainer />
        </div>
    );
};

PromocodeListItem.propTypes = {
    data: PropTypes.objectOf().isRequired,
};
export default PromocodeListItem;
