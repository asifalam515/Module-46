import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [coutries,setCountries]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
        
    },[])
    return (
        <div>
           {
            coutries.map(country=><Country key={country.cca2}country={country}></Country>)
           }
        </div>
    );
};

export default Countries;