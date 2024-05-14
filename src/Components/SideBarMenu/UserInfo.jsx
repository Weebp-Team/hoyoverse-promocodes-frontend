import React from 'react';
import PropTypes from 'prop-types';
import style from './UserInfo.module.css';

const UserInfo = ({ data }) => {
    return (
        <div className={style.container}>
            <img
                src={data.photo}
                alt="!"
            />
            <div>
                <p>{data.firstName + data.lastName}</p>
            </div>
        </div>
    );
};

UserInfo.propTypes = {
    data: PropTypes.objectOf().isRequired,
};
export default UserInfo;
