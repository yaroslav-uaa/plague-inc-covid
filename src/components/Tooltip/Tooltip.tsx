import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Country } from '../../typedef';

interface Props {
    info: Country | null;
}

export const Tooltip = ({ info }: Props) => {
    return (
        <ReactTooltip>
            {info && (
                <>
                    <p className='country__name'> {info?.Country}</p>
                    <p>New Confirmed: {info?.NewConfirmed}</p>
                    <p>New Deaths: {info?.NewDeaths}</p>
                    <p>Total Confirmed: {info?.TotalConfirmed}</p>
                    <p>New Recovered: {info?.NewRecovered}</p>
                    <p>Total Recovered: {info?.TotalRecovered}</p>
                </>
            )}
        </ReactTooltip>
    );
};
