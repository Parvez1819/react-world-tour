
import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';
const Country = ({ countryInfo, handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(countryInfo)
    // console.log(handleVisitedCountry)
    const { name, flags, population, area, cca3 } = countryInfo;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }


    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'black' }}>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={()=>handleVisitedFlags(countryInfo.flags.svg)}>Add Flag</button><br />
            <button onClick={() => handleVisitedCountry(countryInfo)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? "visited" : "Non Visited"}</button>{
                visited ? 'I have visited this country' : 'I want to visit this country'
            }
            <hr />
            <CountryDetails
            countryInfo={countryInfo}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}

            ></CountryDetails>
        </div>
    );
};

export default Country;