import React from 'react'
import './ProductCard.css'
import { theme } from '../../data'

function ProductCard({name, img, description}) {
  return (
    <div className='product-card' style={{background: theme.cardBg}}>
        <img src={img} alt={name} className='product-img'/>
        <h1 className='product-name' style={{color: theme.heading}}>{name}</h1>
        <p style={{color: theme.subText}}>{description} </p>
    </div>
  )
}

export default ProductCard