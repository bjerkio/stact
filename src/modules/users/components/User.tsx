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
}: UserProps) => {
  return (
    <div id={`userId-${id}`}>
      <p>{username}</p>
      <p>{website}</p>
      <Address {...address} />
      <Company {...company} />
      <p>{email}</p>
      <p>{name}</p>
      <p>{phone}</p>
    </div>
  );
};

export default User;
