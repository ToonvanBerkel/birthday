import React, { useState } from 'react';
import data from '../data';
import BirthdayItem from './BirthdayItem';

const BirthdayList = () => {
  const [people, setPeople] = useState(data);

  return (
    <div className="birthday-list">
      <h2>{people.length} Birthdays Today</h2>
      {people.map(person => (
        <BirthdayItem key={person.id} {...person} />
      ))}
      <button onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
};

export default BirthdayList;
