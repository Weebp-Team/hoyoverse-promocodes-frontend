import React from 'react';
import PropTypes from 'prop-types';
import style from './SideBarMenu.module.css';
import SideBarMenuItem from './SideBarMenuItem';
import AuthorizationButton from './AuthorizationButton';

const SideBarMenu = ({ data, activeItemId, setActiveItemId }) => {
    return (
        <div className={style.sideBarMenu}>
            <div className={style.sideBarMenuContainer}>
                <div className={style.title}>
                    <p>Промокоды</p>
                </div>
                <div className={style.gameListContainer}>
                    {data.map((item) => {
                        return (
                            <SideBarMenuItem
                                data={item}
                                isActive={item.id === activeItemId}
                                onClickHandler={setActiveItemId}
                            />
                        );
                    })}
                </div>
                <div className={style.authorizationContainer}>
                    <AuthorizationButton />
                </div>
            </div>
        </div>
    );
};

SideBarMenu.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeItemId: PropTypes.number.isRequired,
    setActiveItemId: PropTypes.func.isRequired,
};

export default SideBarMenu;
