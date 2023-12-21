import React from 'react';
import '../assets/css/masonry-grid.css'

export default function Picture(props) {
    const divStyle = {
        backgroundImage: `url('${props.img}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'start',
        backgroundRepeat: 'no-repeat',
        borderRadius: '10px',
        minHeight: '200px',
        minWidth: '300px'
      };
    
  return (
    <div style={divStyle} className={props.class}>
      <a  href={props.href} target="_blank" rel="noreferrer">
      </a>
    </div>
  )
}
