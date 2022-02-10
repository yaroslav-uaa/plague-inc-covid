import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Country } from '../../typedef';
import { rounded } from '../../utils/coordinates';

export const StyledTitle = styled('p')({
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 400,
    fontSize: '3rem',
    lineHeight: 1.167,
    letterSpacing: '0em',
    margin: '10px 15px',
    color: 'white',
});

interface Props {
    country?: Country;
}

export const CurrentStats = ({ country }: Props) => {
    const population = rounded(country?.population);
    return (
        <>
            <StyledTitle>{country?.Country}</StyledTitle>
            <Typography variant="h6" color="white" sx={{ marginLeft: '30px' }}>
                Population: {population}
            </Typography>
            <div className="currentStats">
                <div>
                    <Typography variant="subtitle1" color="white">
                        New Confirmed: {country?.NewConfirmed}
                    </Typography>
                    <Typography variant="subtitle1" color="white">
                        New Deaths: {country?.NewDeaths}
                    </Typography>
                    <Typography variant="subtitle1" color="white">
                        New Recovered: {country?.NewRecovered}
                    </Typography>
                </div>
                <div>
                    <Typography variant="subtitle1" color="white">
                        Total Confirmed: {country?.TotalConfirmed}
                    </Typography>
                    <Typography variant="subtitle1" color="white">
                        Total Deaths: {country?.TotalDeaths}
                    </Typography>
                    <Typography variant="subtitle1" color="white">
                        Total Recovered: {country?.TotalRecovered}
                    </Typography>
                </div>
            </div>
        </>
    );
};
