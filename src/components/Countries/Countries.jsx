import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    const handleVisitedCountry = (countryInfo) => {
        console.log('add to your visited country')
        const newVisitedCountries = [...visitedCountries, countryInfo];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flags) => {

        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    }
    // remove an item from an array useState
    // use filter to select all the elements except the one you want to remove

    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            {/* visited Flags */}
            <div className="flag-container">
                <h2>Visited Flags : {visitedFlags.length}</h2>
                <div>
                    {
                        visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                    }
                </div>

            </div>
            {/* visited countries */}

            <div>
                <h2>Visited Countries : {visitedCountries.length}</h2>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>Country : {country.name.common}  <br />
                            Capital : {country.capital}</li>
                        )
                    }
                </ul>
            </div>


            {/* displays countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedFlags={handleVisitedFlags}
                        handleVisitedCountry={handleVisitedCountry}
                        countryInfo={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;