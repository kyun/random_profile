import React from 'react';
import './Sticker.scss';
import { animated } from 'react-spring'

const Sticker = ({ name, style }) => {
  return (
    <animated.div className={`Sticker ${name}`} style={style}>
      {name}
    </animated.div>
  )
}

export default Sticker;