import React from 'react';
import { useState, useEffect } from 'react'
import ColorApi from '../../entities/Color/ColorApi';
import DropDownColors from '../../widgets/DropDownColors/DropDownColors';



function GeneratorPage(props) {

    const [colors, setColors] = useState([]);

    async function loadColor() {
        const { data } = await ColorApi.getAllColors();
        setColors(data);
    }

    useEffect(() => {
        loadColor()
    }, []);

    return (
        <div>
            <h1>Генератор носков</h1>
            <DropDownColors colors={colors} setColors={setColors}/> 
        </div>
    );
}

export default GeneratorPage;