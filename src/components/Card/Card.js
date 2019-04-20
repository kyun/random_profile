import React from 'react';
import './Card.scss';
import Sticker from 'components/Sticker';

import clamp from 'lodash-es/clamp'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'


const Card = ({ nat, name, email, age, url, del, last }) => {

  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 2);
    if (!down) {
      if (Math.abs(delta[0]) >= 200) {
        let [x, y] = [Math.sign(delta[0]) === 1 ? window.innerWidth : (window.innerWidth * -1), Math.sign(delta[1]) === 1 ? window.innerHeight : (window.innerHeight * -1)];
        set({ xy: [x, y], config: { mass: velocity, tension: 500 * velocity, friction: 50 } });
        setTimeout(() => {
          del();
        }, 100);

      } else {
        set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
      }
    } else {
      set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
    }

  })
  return (
    <React.Fragment>
      <animated.div className="Card" {...bind()} style={{ transform: xy.interpolate((x, y) => { return `translate3d(${x}px,${y}px,0) rotate(${x * -0.09}deg)` }) }}>
        <div className="img-wrap" style={{ backgroundImage: `url(http://flags.fmcdn.net/data/flags/w580/${nat.toLowerCase()}.png)` }}>
          <img src={url} />
        </div>
        <div className="text-wrap">
          <p className="name">{name}, {age}</p>
          <p className="email">{email}</p>
        </div>
      </animated.div >
      {last ? <Sticker /> : null}
    </React.Fragment>

  );
};

export default Card;