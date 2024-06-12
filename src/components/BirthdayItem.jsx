import React from 'react';

const BirthdayItem = ({ name, age, image }) => {
  return (
    <div className="birthday-item">
      <img src={image} alt={name} className="birthday-image" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default BirthdayItem;
