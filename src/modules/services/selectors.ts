import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store/typedef';

export const selectCountries = (state: AppState) => state.statistics.all.Countries;

export const filteredCountries = createSelector(selectCountries, countries => {
    return [...countries].sort((a, b) => {
        return b.TotalConfirmed - a.TotalConfirmed;
    });
});
