import React from 'react';
import './CardList.scss';

import { useSpring, animated } from 'react-spring'

const Card = () => (
  <animated.div className="Card" style={useSpring({ opacity: 1, from: { opacity: 0 } })}>I will fade in</animated.div>
)

class CardList extends React.Component {
  render() {
    return (
      <div className="CardList">
        <Card />
      </div>
    )
  }
}

export default CardList;