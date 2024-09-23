import CountryData from "../CountryData/CountryData";


const CountryDetails = ({ countryInfo, handleVisitedCountry, handleVisitedFlags }) => {
    return (
        <div>
            <h4>Country Capital : {countryInfo.capital}</h4>
            <hr />
            <CountryData
                countryInfo={countryInfo}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData>
        </div>
    );
};

export default CountryDetails;

