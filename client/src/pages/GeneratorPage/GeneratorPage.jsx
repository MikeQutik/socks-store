import React from 'react';
import { useState, useEffect } from 'react'
import ColorsList from '../../widgets/ColorList/ColorList';
import ColorApi from '../../entities/Color/ColorApi';
import DropDown from '../../shared/ui/DropDown/DropDown';


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
            <ColorsList colors={colors} />
            <DropDown />
            <img
                src="/public/sokcs.jpeg"
                alt="Logo" />
        </div>
    );
}

export default GeneratorPage;