import React from 'react';
import PropTypes from 'prop-types';
import style from './SideBarMenuItem.module.css';

const SideBarMenuItem = ({ data, isActive, onClickHandler }) => {
    return (
        <button
            type="button"
            className={style.sideBarMenuItem}
            onClick={() => {
                onClickHandler(data.id);
            }}
            style={{ backgroundColor: isActive ? '#4266D0' : 'transparent' }}>
            <p className={style.title}>{data.name}</p>
        </button>
    );
};

SideBarMenuItem.propTypes = {
    data: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClickHandler: PropTypes.func.isRequired,
};

export default SideBarMenuItem;
