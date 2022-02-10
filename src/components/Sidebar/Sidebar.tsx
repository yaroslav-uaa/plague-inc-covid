import React from 'react';
import { Info } from '../Info/Info';
import { Search } from '../SearchField/Search';
import { Player } from '../Player/Player';
import { ThemeSongs } from '../Player/theme-songs';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <Info />
            <Search />
            <Player themeSongs={ThemeSongs} />
        </div>
    );
};
