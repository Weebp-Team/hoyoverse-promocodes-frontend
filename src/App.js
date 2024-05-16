import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import SideBarMenu from './Components/SideBarMenu/SideBarMenu';
import PromocodeList from './Components/PromocodeList/PromocodeList';

const App = () => {
    const [activeItemId, setActiveItemId] = useState(1);

    const [gameData, setGameData] = useState([]);

    const [userData, setUserData] = useState({});

    const [promocodeData, setPromocodeData] = useState({
        result: [],
    });

    useEffect(() => {
        Promise.all([
            fetch('https://api.hoyopromo.ru/api/v1/game/'),
            fetch('https://api.hoyopromo.ru/api/v1/promocode/'),
            fetch('https://api.hoyopromo.ru/api/v1/user/'),
        ])
            .then(([resultGame, resultPromocode, resultUser]) =>
                Promise.all([resultGame.json(), resultPromocode.json(), resultUser.json()])
            )
            .then(([dataGame, dataPromocode, dataUser]) => {
                setGameData(dataGame);
                setPromocodeData(dataPromocode);
                setUserData(dataUser);
            })
            .catch((error) => console.log(error.message));
        // eslint-disable-next-line
    }, []);

    const filterPromocodesByGame = (filterValue, arrayData) => {
        return arrayData.filter((item) => item.game.id === filterValue);
    };

    return (
        <div className={style.appContainer}>
            <div className={style.menu}>
                <SideBarMenu
                    data={gameData}
                    userData={userData}
                    activeItemId={activeItemId}
                    setActiveItemId={setActiveItemId}
                />
            </div>
            <div className={style.content}>
                <PromocodeList
                    data={filterPromocodesByGame(
                        activeItemId,
                        promocodeData.result
                    )}
                    activeItemId={activeItemId}
                />
            </div>
        </div>
    );
};

export default App;
