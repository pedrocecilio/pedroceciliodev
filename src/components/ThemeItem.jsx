import React from 'react'

const ThemeItem = ({ img, color, changeColor }) => {
    return <img src={img} className="theme__img"
        onClick={() => { changeColor(color) }}
        alt="imagens com as cores que pode definir de fundo" />;
}

export default ThemeItem;