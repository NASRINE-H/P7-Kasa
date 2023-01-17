import React from 'react';



const LogeInfo = ({title, location}) => {
  return (
    <div className="logementInfo">
      <h1 className="titleInfo">{title}</h1>
      <h3 className="locInfo">{location}</h3>
    </div>
  );
  
};

export default LogeInfo;