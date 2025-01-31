import React from 'react';
import { useState } from 'react';
import DropDrilling from '../DropDrilling/DropDrilling';

function DropDown({ colors, setColors }) {

        const [selectedColor, setSelectedColor] = useState('');

        console.log(selectedColor);
        
      
        const handleChange = (event) => {
          setSelectedColor(event.target.value);
        };

    return (
      <div>
        <div>
        <h1>Выберите цвет</h1>
        <label htmlFor="options"></label>
        <select value={selectedColor} onChange={handleChange}>
          <option disabled>
            Выберите...
          </option>
          {colors.map((color) => (
            <option key={color.id} value={color.title}>{color.title}</option>
          ))}
          {/* <option value="red">Красный</option>
          <option value="green">Зеленый</option>
          <option value="blue">Синий</option>
          <option value="white">Белый</option>
          <option value="yellow">Желтый</option>
          <option value="black">Черный</option> */}
        </select>
          <div>
            <div style={{ backgroundColor: `${selectedColor}`, display: 'inline-block',  padding: '20px 4px', width: '85px'}}></div>
          </div>
      </div>
      <DropDrilling selectedColor={selectedColor}/>
      </div>
    );
}

export default DropDown;