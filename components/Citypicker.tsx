"use client";
import { Country, State, City } from 'country-state-city';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Select from 'react-select';

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;
 
type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode:country.isoCode
    },
    label:country.name,
}))

const Citypicker = () => {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();

  return (
    <div>
          <Select options={options } />
    </div>
  )
}

export default Citypicker
