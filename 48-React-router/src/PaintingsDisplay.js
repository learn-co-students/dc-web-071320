import React from 'react';
import PaintingInfo from './PaintingInfo';

export function PaintingsDisplay(props) {
    console.log(props.paintings)
  return (
    <div>
      {props.paintings.map(painting =>   <PaintingInfo painting={painting} key={painting.id}/> )}
    
    </div>
  );
}

// export default PaintingsDisplay;