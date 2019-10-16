import React from 'react';
import { User as UserProps } from '../store/Reducer';
import Address from './Address';
import Company from './Company';

const User: React.FC<UserProps> = ({
  id,
  address,
  company,
  email,
  name,
  phone,
  username,
  website,
  ...rest
}: UserProps) => {
  return (
    <div data-testid="user" {...rest}>
      <h2>{username}</h2>
      <p>{website}</p>
      <p>{email}</p>
      <p>{name}</p>
      <p>{phone}</p>
      <Address {...address} />
      <Company {...company} />
    </div>
  );
};

export default User;
