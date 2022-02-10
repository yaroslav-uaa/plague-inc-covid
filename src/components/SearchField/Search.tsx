import React, { useEffect, useState } from 'react';
import { TextField, FormHelperText, FormControl, Typography } from '@mui/material';
import { Rating } from '../Rating/Rating';
import { Country } from '../../typedef';
import { useAppSelector } from '../../store/hooks';
import { filteredCountries } from '../../modules/services/selectors';

export const Search = () => {
    const filteredStats = useAppSelector(filteredCountries);

    const lastCountries = filteredStats.slice(0, 5);

    const [countryName, setCountryName] = useState<string>('');
    const [foundCountries, setFoundCountries] = useState<Country[]>(lastCountries);

    useEffect(() => {
        setFoundCountries(lastCountries);
    }, [filteredStats]);

    const filter = (e: { target: { value: any } }) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = filteredStats
                .filter(country => {
                    return country.Country.toLowerCase().startsWith(keyword.toLowerCase());
                })
                .slice(0, 5);
            setFoundCountries(results);
        } else {
            setFoundCountries(lastCountries);
        }
        setCountryName(keyword);
    };

    return (
        <div>
            <FormControl fullWidth sx={{ margin: '30px 0', color: '#FFFFFF' }}>
                <Typography variant="h6" color="#da132d" sx={{alignSelf: 'center'}}>
                    Get statistic by countries
                </Typography>
                <TextField
                    value={countryName}
                    onChange={filter}
                    size="small"
                    color="primary"
                    type="text"
                    variant="outlined"
                    fullWidth
                    sx={{ borderBottom: '1px solid white' }}
                />
                <FormHelperText sx={{ color: '#FFFFFF' }}>Country</FormHelperText>
            </FormControl>
            <Rating countries={foundCountries} />
        </div>
    );
};
