import React from 'react';
import './PageWrapper.css';

const PageWrapper = ({ children }) => {
  return (
    <div className="page-container">
      <div className="page-box">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
