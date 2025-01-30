import React from 'react';
import { useState } from 'react';

function DropDown(props) {

        const [selectedOption, setSelectedOption] = useState('');
      
        const handleChange = (event) => {
          setSelectedOption(event.target.value);
        };

    return (
        <div>
        <h1>Выберите цвет</h1>
        <label htmlFor="options"></label>
        <select id="options" value={selectedOption} onChange={handleChange}>
          <option value="" disabled>
            Выберите...
          </option>
          <option value="red">Красный</option>
          <option value="green">Зеленый</option>
          <option value="blue">Синий</option>
          <option value="white">Белый</option>
          <option value="yellow">Желтый</option>
          <option value="black">Черный</option>
        </select>

        {/* Отображение выбранного значения */}
        {selectedOption && (
          <div>
            <div style={{ backgroundColor: `${selectedOption}`, display: 'inline-block',  padding: '2px 4px', width: '85px'}}><h2>{selectedOption}</h2></div>
          </div>
        )}
      </div>
    );
}

export default DropDown;