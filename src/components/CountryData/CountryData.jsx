

const CountryData = ({ countryInfo }) => {
    console.log(countryInfo)
    return (
        <div>
            <p>Official Name : {countryInfo.name.official}</p>
        </div>
    );
};

export default CountryData;