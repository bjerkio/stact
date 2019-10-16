import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link, useLocation } from 'react-router-dom';
import { LIST_COUNTRIES_QUERY } from '../gql';
import { Country } from '../../../generated/graphql';

interface CountryListData {
  countries: Country[];
}

const CountryList: FC = () => {
  const location = useLocation()
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  const { data, loading, error } = useQuery<CountryListData>(
    LIST_COUNTRIES_QUERY,
  );
  if (error) {
    console.error(error); // eslint-disable-line
    return null;
  }
  if (loading) return <div>Loading...</div>;
  return (
    <section>
      <ul>
        {data &&
          data.countries.map(country => (
            <li key={country.code!}>
              <Link to={`${location.pathname}/${country.code!}`}>
                {country.emoji}
                {country.name}
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default CountryList;
