import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Country, Summary } from '../../typedef';
import axios from 'axios';

export const loadSummaryThunk = createAsyncThunk<Summary>('summary/load', async () => {
    const { data } = await axios.get('https://api.covid19api.com/summary');
    return data;
});

export const loadStatsForCountryThunk = createAsyncThunk(
    'statsByCountry/load',
    async (countryId: string) => {
        const { data } = await axios.get(`https://api.covid19api.com/dayone/country/${countryId}`);
        return data;
    },
);

export const loadStatsPerDaysThunk = createAsyncThunk(
    'statsPerDays/load',
    async ({ countryId, from, to }: { countryId: string; from: string; to: string }) => {
        const { data } = await axios.get(
            `https://api.covid19api.com/country/${countryId}?from=${from}&to=${to}`,
        );
        return data;
    },
);

export const setCurrentCountry = createAction<Country | undefined>('country/current');
