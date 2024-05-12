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
            fetch('https://api.hoyopromo.ru/api/v1/game/', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }),
            fetch('https://api.hoyopromo.ru/api/v1/promocode/', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }),
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
                <PromocodeList data={promocodeData} />
            </div>
        </div>
    );
};

export default App;
