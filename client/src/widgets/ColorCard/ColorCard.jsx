import React from 'react';

function ColorCard({color}) {
    return (
        <>
        <div style={{ border: '1px solid black' }}>
            {color.title} </div>
            <div style={{ border: '1px solid black' }}> </div>
        </>
    );
}

export default ColorCard;