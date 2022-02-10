import React, { useEffect } from 'react';
import Map from '../../components/Map/Map';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { geoUrl } from '../../utils/coordinates';
import { useAppDispatch } from '../../store/hooks';
import { loadSummaryThunk } from '../services/actions';
import { StyledTitle } from '../../components/SinglePageCurrentStats/CurrentStats';

const MainPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadSummaryThunk());
    }, []);

    return (
        <div className="mainPage">
            <Sidebar />
            <div className="map">
                <StyledTitle>COVID-19</StyledTitle>
                <Map geoUrl={geoUrl} />
            </div>
        </div>
    );
};

export default MainPage
