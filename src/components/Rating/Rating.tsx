import React from 'react';
import { Table } from 'react-bootstrap';
import { Country } from '../../typedef';

interface Props {
    countries: Country[];
}

export const Rating = ({ countries }: Props) => {
    return (
        <Table striped bordered hover size="sm" className="table__rating">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>Death</th>
                    <th>Recovered</th>
                </tr>
            </thead>
            <tbody>
                {countries.map((country, ids) => (
                    <tr>
                        <th>{ids + 1}</th>
                        <th>{country.Country}</th>
                        <th>{country.TotalConfirmed}</th>
                        <th>{country.TotalDeaths}</th>
                        <th>{country.TotalRecovered}</th>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
