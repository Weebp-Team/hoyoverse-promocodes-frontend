import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import SideBarMenu from './Components/SideBarMenu/SideBarMenu';

const App = () => {
    const [activeItemId, setActiveItemId] = useState(1);

    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://api.hoyopromo.ru/api/v1/game/'
            );

            if (response.ok) {
                const dataJson = await response.json();
                setGameData(dataJson);
            } else {
                alert(
                    `Ошибка запроса, ответ пришел со статусом: ${response.status}`
                );
            }
        };

        fetchData();
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
            <div className={style.content} />
        </div>
    );
};

export default App;
