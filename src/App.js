import React, { useState } from 'react';
import JSONDATA from './JSONDATA.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [subType, setSubType] = useState([]);
  const [title, setTitle] = useState([]);

  const itemType = [...new Set(JSONDATA.map((item) => item.type))];

  const filterByType = (e) => {
    let dataByType = JSONDATA.filter((item) => item.type === e.target.value);
    dataByType = [...new Set(dataByType.map((item) => item.subtype))];
    console.log(dataByType);
    setSubType(dataByType);
  };

  const filterBySubType = (e) => {
    let dataBySubType = JSONDATA.filter(
      (item) => item.subtype === e.target.value
    );
    dataBySubType = [...new Set(dataBySubType.map((item) => item.title))];

    setTitle(dataBySubType);
  };

  return (
    <div className='container'>
      <div className='col-md-6 m-auto p-4'>
        <select onChange={filterByType} className='form-select mb-2'>
          <option>---Select Type---</option>
          {itemType.map((items) => (
            <option key={items}> {items} </option>
          ))}
        </select>

        <select onChange={filterBySubType} className='form-select mb-2'>
          <option>---Select SubType---</option>
          {subType.map((items) => (
            <option key={items}> {items} </option>
          ))}
        </select>

        <select className='form-select mb-2'>
          <option>---Select Item---</option>
          {title.map((items) => (
            <option key={items}> {items} </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default App;
