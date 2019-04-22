import React from 'react';
import './CircleButton.scss';
import {Like} from 'components/Icons';


const CircleButton = ({icon, onClick}) => {
  return (
    <button className="CircleButton" onClick={onClick}>
      {icon}
    </button>
  )

}

export default CircleButton;