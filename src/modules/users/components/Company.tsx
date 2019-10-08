import React from 'react';
import { Company as CompanyProps } from '../store/Reducer';

const Company: React.FC<CompanyProps> = ({
  name,
  bs,
  catchPhrase,
}: CompanyProps) => {
  return (
    <section>
      <h3>{name}</h3>
      <p>{bs}</p>
      <p>{catchPhrase}</p>
    </section>
  );
};

export default Company;
