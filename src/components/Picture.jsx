// import React from 'react';

// export default function Picture(props) {
//     const divStyle = {
//         backgroundImage: `url('${props.img}')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'start',
//         backgroundRepeat: 'no-repeat',
//         borderRadius: '10px',
//         minHeight: '200px',
//         minWidth: '300px'
//       };
    
//   return (
//     <div style={divStyle} className={props.class}>
//       <a  href={props.href} target="_blank" rel="noreferrer">
//       </a>
//     </div>
//   )
// }

import React from 'react';

export default function Picture(props) {
  const divStyle = {
    backgroundImage: `url('${props.img}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'start',
    backgroundRepeat: 'no-repeat',
    borderRadius: '10px',
    minHeight: '18vh',
    minWidth: '28vw'
  };

  // // Media queries for different screen sizes
  // const mediaQueryStyle = {
  //   '@media (max-width: 768px)': {
  //     minHeight: '150px', // Adjust the value for smaller screens
  //     minWidth: '200px',
  //   },
  //   '@media (max-width: 480px)': {
  //     minHeight: '75px', // Adjust the value for even smaller screens
  //     minWidth: '10px',
  //   },
  // };

  return (
    <div style={divStyle} className={props.class}>
      <a href={props.href} target="_blank" rel="noreferrer">
        {/* Your content goes here */}
      </a>
    </div>
  );
}
