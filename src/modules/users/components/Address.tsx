import React from 'react';
import { Address as AddressProps } from '../store/Reducer';

const Address: React.FC<AddressProps> = ({
  city,
  geo,
  street,
  suite,
  zipcode,
}: AddressProps) => {
  return (
    <address>
      <p>{city}</p>
      <p>{`${geo.lat} - ${geo.lng}`}</p>
      <p>{street}</p>
      <p>{suite}</p>
      <p>{zipcode}</p>
    </address>
  );
};

export default Address;
