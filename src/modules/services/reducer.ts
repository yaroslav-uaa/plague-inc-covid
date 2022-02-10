import { createReducer } from '@reduxjs/toolkit';
import {
    loadStatsForCountryThunk,
    loadStatsPerDaysThunk,
    loadSummaryThunk,
    setCurrentCountry,
} from './actions';
import { Country, Summary } from '../../typedef';

interface State {
    all: Summary;
    statsByCountry: Country;
    currentCountry: Country | undefined;
    info: Country;
}

const defaultState: State = {
    all: {
        Global: {
            NewConfirmed: 0,
            TotalConfirmed: 0,
            NewDeaths: 0,
            TotalDeaths: 0,
            NewRecovered: 0,
            TotalRecovered: 0,
        },
        Countries: [],
        Date: '',
    },
    statsByCountry: {
        Country: '',
        CountryCode: '',
        Slug: '',
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        Date: '',
    },
    currentCountry: {
        Country: '',
        CountryCode: '',
        Slug: '',
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        Date: '',
    },
    info: {
        Country: '',
        CountryCode: '',
        Slug: '',
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        Date: '',
    },
};

export const statistics = createReducer(defaultState, builder =>
    builder
        .addCase(loadSummaryThunk.fulfilled, (state, { payload }) => {
            state.all = payload;
        })
        .addCase(loadStatsForCountryThunk.fulfilled, (state, { payload }) => {
            state.statsByCountry = payload;
        })
        .addCase(loadStatsPerDaysThunk.fulfilled, (state, { payload }) => {
            state.statsByCountry = payload;
        })
        .addCase(setCurrentCountry, (state, { payload }) => {
            state.currentCountry = payload;
        }),
);
