import React from 'react';

export default function Picture(props) {
  const divStyle = {
    backgroundImage: `url('${props.img}')`,
    backgroundSize: 'cover',
    backgroundPosition: `${props.position}`,
    backgroundRepeat: 'no-repeat',
    borderRadius: '10px',
    minHeight: '18vh',
    minWidth: '28vw',
    cursor: 'pointer'
  };

  return (
    <div style={divStyle} className={props.class}>
      <a href={props.href} target="_blank" rel="noreferrer">
        {/* Your content goes here */}
      </a>
    </div>
  );
}
