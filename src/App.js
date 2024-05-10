import React, { useState } from 'react';
import style from './App.module.css';
import SideBarMenu from './Components/SideBarMenu/SideBarMenu';

const data = [
    {
        id: 0,
        title: 'Genshin Impact',
    },
    {
        id: 1,
        title: 'Honkai: Star Rail',
    },
];

const App = () => {
    const [activeItemId, setActiveItemId] = useState(0);

    return (
        <div className={style.appContainer}>
            <div className={style.menu}>
                <SideBarMenu
                    data={data}
                    activeItemId={activeItemId}
                    setActiveItemId={setActiveItemId}
                />
            </div>
            <div className={style.content} />
        </div>
    );
};

export default App;
