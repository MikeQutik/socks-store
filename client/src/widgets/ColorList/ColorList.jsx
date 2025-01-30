import React from 'react';
import ColorCard from '../ColorCard/ColorCard'

function ColorList({colors}) {
    return (
        <>
            {colors.map((color) => 
                <ColorCard key={color.id} color={color} />
                )}
        </> 
    );
}

export default ColorList;