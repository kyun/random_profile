import React from 'react';
import './Card.scss';

import clamp from 'lodash-es/clamp'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'


const Card = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 2)
    set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
  })

  return (
    <animated.div className="Card" {...bind()} style={{ transform: xy.interpolate((x, y) => { return `translate3d(${x}px,${y}px,0) rotate(${x * 0.09}deg)` }) }}>
      <div className="img-wrap" style={{ backgroundImage: `url(http://flags.fmcdn.net/data/flags/w580/no.png)` }}>
        <img src="https://randomuser.me/api/portraits/men/1.jpg" />
      </div>
      <div className="text-wrap">
        <p className="name">Rolf Hegal, 39</p>
        <p className="email">rolf.hegdal@example.com</p>
      </div>
    </animated.div >
  );
};

export default Card;