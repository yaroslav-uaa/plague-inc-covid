import React from 'react';
import { LocalizationProvider, StaticDateRangePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box, Button, TextField } from '@mui/material';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

interface Props {
    value: [string | number | Date | null | undefined, string | number | Date | null | undefined];
    setNewDate: (value: any) => void;
    clearDate: () => void;
}

export const DatePicker = ({ value, setNewDate, clearDate }: Props) => {

    return (
        <div className="datePicker">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDateRangePicker
                    displayStaticWrapperAs="mobile"
                    value={value}
                    disableFuture
                    onChange={newValue => {
                        setNewDate(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...endProps} />
                        </React.Fragment>
                    )}
                />
            </LocalizationProvider>
            <Button
                variant="contained"
                endIcon={<QueryStatsIcon />}
                className="showStat"
                onClick={() => clearDate()}
                sx={{
                    background: '#86072de6',
                    display: 'flex',
                    margin: '30px auto',
                    '&:hover': { background: '#df0333' },
                }}
            >
                Reset
            </Button>
        </div>
    );
};
