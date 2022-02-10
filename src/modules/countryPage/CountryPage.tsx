import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button } from '@mui/material';
import Chart from '../../components/Chart/Chart';
import { DatePicker } from '../../components/Datepicker/DatePicker';
import { CurrentStats } from '../../components/SinglePageCurrentStats/CurrentStats';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadStatsForCountryThunk, loadStatsPerDaysThunk } from '../services/actions';

export type MyParams = {
    countryId: string;
};

const CountryPage = () => {
    const dispatch = useAppDispatch();
    const [date, setDate] = useState<[null, null] | [string, string]>([null, null]);
    const [value, setValue] = useState<[null, null] | [Date, Date]>([null, null]);
    const statsByCountry = useAppSelector(state => state.statistics.statsByCountry);
    const current = useAppSelector(state => state.statistics.currentCountry);
    const stats = useAppSelector(state => state.statistics.all.Countries);
    const currentCountry =
        stats.length > 0 ? current : JSON.parse(localStorage.getItem('current') || '{}');

    const params = useParams<MyParams>() as MyParams;
    const navigate = useNavigate();
    const countryId = params.countryId.slice(1);

    const formatDate = (date: Date): string => {
        return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
            '0' + date.getDate()
        ).slice(-2)}T00:00:00Z`;
    };

    const setNewDate = (value: [Date, Date]) => {
        setValue(value);
        if (value[0] !== null && value[1] !== null) {
            const val = [];
            val[0] = formatDate(value[0]);
            val[1] = formatDate(value[1]);
            setDate([val[0], val[1]]);
        }
    };

    const getFullStats = async () => {
        dispatch(loadStatsForCountryThunk(countryId));
        clearDate();
    };

    const clearDate = () => {
        setValue([null, null]);
    };

    useEffect(() => {
        const today = new Date();
        const weekAgo = new Date();
        weekAgo.setDate(today.getDate() - 7);

        setDate([formatDate(weekAgo), formatDate(today)]);
    }, []);

    useEffect(() => {
        const [from, to] = date;
        if (from !== null && to !== null) {
            dispatch(loadStatsPerDaysThunk({ countryId, from, to }));
        }
    }, [date]);

    return (
        <div className="singlePage">
            <div className="singlePageSidebar">
                <Button
                    onClick={() => navigate('/')}
                    startIcon={<ArrowBackIosIcon />}
                    variant="outlined"
                    color="error"
                    size="small"
                    sx={{ marginLeft: '30px' }}
                >
                    Back
                </Button>
                <DatePicker value={value} setNewDate={setNewDate} clearDate={clearDate} />
                <Button
                    fullWidth
                    size="large"
                    onClick={() => getFullStats()}
                    sx={{
                        color: 'white',
                        '&:hover': {
                            textShadow: '0 0 4px #ad031f',
                            background: '#ad031f48',
                        },
                    }}
                >
                    Get full statistics
                </Button>
            </div>

            <div>
                <CurrentStats country={currentCountry} />
                <Chart country={statsByCountry} formatDate={formatDate} />
            </div>
        </div>
    );
};

export default CountryPage
