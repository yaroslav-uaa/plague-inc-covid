import React, { memo, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { setCurrentCountry } from '../../modules/services/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Country } from '../../typedef';
import { useNavigate } from 'react-router';
import { Tooltip } from '../Tooltip/Tooltip';
import { colorMaps } from '../../utils/colorMaps';

interface Props {
    geoUrl: string;
}

const Map = ({ geoUrl }: Props) => {
    const dispatch = useAppDispatch();
    const statistics = useAppSelector(state => state.statistics.all);

    const [info, setInfo] = useState<Country | null>(null);
    const navigate = useNavigate();
    const [color, setColor] = useState<string>('#fcf0f1');

    const colorSwitch = (value: any) => {
        if (value < 1) setColor(colorMaps[0]);
        if (value >= 1 && value < 3) setColor(colorMaps[1]);
        if (value >= 3 && value < 5) setColor(colorMaps[2]);
        if (value >= 5 && value < 7) setColor(colorMaps[3]);
        if (value >= 7 && value < 9) setColor(colorMaps[4]);
        if (value >= 9 && value < 11) setColor(colorMaps[5]);
        if (value >= 11 && value < 13) setColor(colorMaps[6]);
        if (value >= 13 && value < 15) setColor(colorMaps[7]);
        if (value >= 15 && value < 17) setColor(colorMaps[8]);
        if (value >= 17) setColor(colorMaps[9]);
    };

    const fillTooltip = (geo: any) => {
        const country = statistics.Countries.filter(
            el => el.CountryCode === geo.properties.ISO_A2,
        )[0];
        if (!country) {
            return;
        }
        const percentage = Math.round((country.TotalConfirmed / geo.properties.POP_EST) * 100);
        colorSwitch(percentage);
        setInfo({ ...country, population: geo.properties.POP_EST });
        localStorage.setItem(
            'current',
            JSON.stringify({ ...country, population: geo.properties.POP_EST }),
        );
        dispatch(
            setCurrentCountry({
                ...country,
                population: geo.properties.POP_EST,
            }),
        );
    };

    const hideTooltip = () => {
        setInfo(null);
        setColor('#fcf0f1');
    };

    const openCountryInfoPage = (geo: any) => {
        const country = statistics.Countries.filter(
            el => el.CountryCode === geo.properties.ISO_A2,
        )[0];
        navigate(`:${country.Slug}`);
    };

    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 220 }}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onMouseEnter={() => fillTooltip(geo)}
                                onMouseLeave={() => hideTooltip()}
                                onClick={() => openCountryInfoPage(geo)}
                                style={{
                                    default: {
                                        fill: '#ffffff',
                                        outline: 'none',
                                    },
                                    hover: {
                                        fill: `${color}`,
                                        outline: 'none',
                                    },
                                    pressed: {
                                        fill: '#E42',
                                        outline: 'none',
                                    },
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
            <Tooltip info={info} />
        </>
    );
};
export default memo(Map);
