import React from 'react';
import { useState } from 'react';
import DropDrilling from '../DropDrilling/DropDrilling';

function DropDownImages({ images, setImages}) {

        const [selectedImage, setSelectedImage] = useState('');
      
        const handleChange = (event) => {
          setSelectedImage(event.target.value);
        };

    return (
        <div>
        <h1>Выберите картинку</h1>
        <label htmlFor="options"></label>
        <select value={selectedImage} onChange={handleChange}>
          <option disabled>
            Выберите...
          </option>
          {images.map((image) => (
            <option key={image.id} value={image.title}>{image.title}</option>
          ))}
          {/* <option value="http://localhost:3000/pattern/1.jpg">1</option>
          <option value="http://localhost:3000/pattern/2.jpg">2</option>
          <option value="http://localhost:3000/pattern/3.jpg">3</option>
          <option value="http://localhost:3000/pattern/4.jpg">4</option>
          <option value="http://localhost:3000/pattern/5.jpg">5</option>
          <option value="http://localhost:3000/pattern/6.jpg">6</option> */}
        </select>
          <div>
          <img 
                src={selectedImage} 
                style={{ width: '300px', height: 'auto' }} 
            />
          </div>
          <DropDrilling selectedImage={selectedImage}/>
      </div>
    );
}

export default DropDownImages;