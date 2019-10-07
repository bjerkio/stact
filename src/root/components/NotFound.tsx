import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      {`404 Not Found: 
    ${location &&
      location.state &&
      location.state.from &&
      location.state.from.pathname}`}
    </div>
  );
};

export default NotFound;
