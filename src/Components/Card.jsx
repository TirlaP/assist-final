import React, { useState, useEffect, useRef } from 'react'

const Card = ({ card }) => {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')
    return (
      <div className='card'>
        <div className='front'>
          {card.title.rendered}
          <img src={card.jetpack_featured_media_url} />
          <div className='footer-card'>
            <p>{card.excerpt.rendered}</p>
            <p>{card.date}</p>
          </div>
        </div>
      </div>
    )
}

export default Card