import React from 'react';
import PropTypes from 'prop-types';
import style from './SideBarMenu.module.css';
import SideBarMenuItem from './SideBarMenuItem';
import AuthorizationButton from './AuthorizationButton';
import LogoutButton from './LogoutButton';
import UserInfo from './UserInfo';

const SideBarMenu = ({ data, userData, activeItemId, setActiveItemId }) => {
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
                {userData.length > 0 ? (
                    <div className={style.userContainer}>
                        <UserInfo 
                            data={userData}
                        />
                        <LogoutButton />
                    </div>
                ) : (
                    <div className={style.authorizationContainer}>
                        <AuthorizationButton />
                    </div>
                )}
            </div>
        </div>
    );
};

SideBarMenu.defaultProps = {
    userData: {}
}

SideBarMenu.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    userData: PropTypes.objectOf(PropTypes.object),
    activeItemId: PropTypes.number.isRequired,
    setActiveItemId: PropTypes.func.isRequired,
};

export default SideBarMenu;
