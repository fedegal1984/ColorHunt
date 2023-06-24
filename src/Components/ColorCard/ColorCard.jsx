import React from 'react'
import ButtonBorder from '../ButtonBorder/ButtonBorder'
import "./ColorCard.css"

const ColorCard = ({colors, likes, horas}) => {

  return (
    <div className='card'>
      <div className='paleta'>
        {colors.map((color, index) => (
          <div key={index} className="color-box" style={{ backgroundColor: `#${color}` }}>
          </div>
        ))}
      </div>
      <div className='footerCard'>
        <div className='likes'>
        <ButtonBorder><i class="bi bi-heart"></i>{likes}</ButtonBorder>
        </div>
        <div className='horas'>
          <span>{horas} hours</span>
        </div>
      </div>
    </div>
  )
}

export default ColorCard