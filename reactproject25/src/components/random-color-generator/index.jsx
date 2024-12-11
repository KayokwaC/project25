
import React, { useState } from 'react';

export default function RandomColorGenerator() {
    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState('#000000');

    function generateRandomColor() {
        let randomColor = '';
        if (colorType === 'hex') {
            randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        } else if (colorType === 'rgp') {
            randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        }
        setColor(randomColor);
    }
    return (
        <div style={
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '100vh',
                width: '100vw',
                backgroundColor: color
            }
        }>
            <button onClick={()=>(setColorType('hex'))}>Create HEX Color</button>
            <button onClick={()=>(setColorType('rgp'))}>Create RGB Color</button>
            <button onClick={()=>(generateRandomColor())}>Generate Random Color</button>
            <h1>{color}</h1>
        </div>
    )
}