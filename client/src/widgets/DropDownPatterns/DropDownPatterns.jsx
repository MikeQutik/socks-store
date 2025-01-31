import React from 'react';
import { useState } from 'react';
import DropDrilling from '../DropDrilling/DropDrilling';

function DropDownPatterns({ patterns, setPatterns}) {

        const [selectedPattern, setSelectedPattern] = useState('');
      
        const handleChange = (event) => {
          setSelectedPattern(event.target.value);
        };

    return (
        <div>
        <h1>Выберите узор</h1>
        <label htmlFor="options"></label>
        <select value={selectedPattern} onChange={handleChange}>
          <option disabled>
            Выберите...
          </option>
          {patterns.map((pattern) => (
            <option key={pattern.id} value={pattern.title}>{pattern.title}</option>
          ))}
          {/* <option value="red">1</option>
          <option value="green">2</option>
          <option value="blue">3</option>
          <option value="white">4</option>
          <option value="yellow">5</option>
          <option value="black">6</option> */}
        </select>
          <div>
          <img 
                src={selectedPattern} 
                 
                style={{ width: '300px', height: 'auto' }} 
            />
          </div>

          <img src={selectedPattern} alt="" />
          <DropDrilling selectedPattern={selectedPattern}/>
      </div>
    );
}

export default DropDownPatterns;