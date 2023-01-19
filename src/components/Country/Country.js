import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h1>Name:{props.country.name.common}</h1>
            <h3>Population:{props.country.population}</h3>

        </div>
    );
};

export default Country;