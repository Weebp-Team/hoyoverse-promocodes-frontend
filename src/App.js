import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import SideBarMenu from './Components/SideBarMenu/SideBarMenu';
import PromocodeList from './Components/PromocodeList/PromocodeList';

const App = () => {
    const [activeItemId, setActiveItemId] = useState(1);

    const [gameData, setGameData] = useState([]);

    const [promocodeData, setPromocodeData] = useState({
        result: [],
    });

    useEffect(() => {
        Promise.all([
            fetch('https://api.hoyopromo.ru/api/v1/game/'),
            fetch('https://api.hoyopromo.ru/api/v1/promocode/'),
        ])
            .then(([resultGame, resultPromocode]) =>
                Promise.all([resultGame.json(), resultPromocode.json()])
            )
            .then(([dataGame, dataPromocode]) => {
                setGameData(dataGame);
                setPromocodeData(dataPromocode);
            })
            .catch((error) => console.log(error.message));
        console.log(promocodeData);
        // eslint-disable-next-line
    }, []);

    const filterPromocodesByGame = (filterValue, arrayData) => {
        const arr = arrayData.filter((item) => item.game.id === filterValue);
        console.log(arr);

        return arr;
    };

    return (
        <div className={style.appContainer}>
            <div className={style.menu}>
                <SideBarMenu
                    data={gameData}
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
