import React from 'react'
import Country from './country';
import './practiceArr'
import countries from '../practiceArr';

function TestApp() {
    const countryCompo= countries.map(country => <Country name= {name.name} capital= {}>) 
    return (
        <div>
            <Country />
            <Country />
            <Country />
        </div>
    )
}

export default TestApp;