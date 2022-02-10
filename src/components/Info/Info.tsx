import React from 'react';
import { useAppSelector } from '../../store/hooks';

export const Info = () => {
    const stats = useAppSelector(state => state.statistics.all.Global);

    return (
        <div>
            <p>New Confirmed: <span>{stats?.NewConfirmed}</span></p>
            <p>Total Confirmed: <span>{stats?.TotalConfirmed}</span></p>
            <p>New Deaths: <span>{stats?.NewDeaths}</span></p>
            <p>Total Deaths: <span>{stats?.TotalDeaths}</span></p>
            <p>New Recovered: <span>{stats?.NewRecovered}</span></p>
            <p>Total Recovered: <span>{stats?.TotalRecovered}</span></p>
        </div>
    );
};
