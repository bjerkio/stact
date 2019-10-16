import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { Country as CountryInterface } from '../../../generated/graphql';
import { GET_COUNTRY_QUERY } from '../gql';

interface CountryData {
  country: CountryInterface;
}

interface CountryQueryVariables {
  code: string;
}

const Country: FC = () => {
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  const { code } = useParams();
  if (!code) throw Error('Country code missing');
  const { data, loading, error } = useQuery<CountryData, CountryQueryVariables>(
    GET_COUNTRY_QUERY,
    { variables: { code } },
  );
  if (error) {
    console.error(error); // eslint-disable-line
    return null;
  }
  if (loading) return <div>Loading...</div>;
  return (
    <section>
      {data && (
        <>
          <h1>{`${data.country.emoji} ${data.country.name} (${data.country.native})`}</h1>
          <p>{`Continent: ${data.country.continent!.name}`}</p>
          <p>{`Currency: ${data.country.currency}`}</p>
          <p>{`Phone code: ${data.country.phone}`}</p>
          <p>Languages:</p>
          <ul>
            {data.country.languages!.map(lang => (
              <li key={`${data.country.name}-${lang!.code}`}>
                {`${lang!.code}: ${lang!.name} (${lang!.native})`}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Country;
