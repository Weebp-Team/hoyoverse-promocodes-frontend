import React from 'react';
import PropTypes from 'prop-types';
import style from './SideBarMenu.module.css';
import SideBarMenuItem from './SideBarMenuItem';

const SideBarMenu = ({ data, activeItemId, setActiveItemId }) => {
    const authorize = async () => {
        const clientId = 51921601;
        const redirectUri = 'http://localhost/vk';
        window.location.href = `https://oauth.vk.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&display=page&response_type=code&v=5.131`;
    };

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
                <div className={style.account}>
                    <button
                        type="button"
                        onClick={() => {
                            console.log(authorize());
                        }}>
                        authorize
                    </button>
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
