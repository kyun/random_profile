import React from 'react';
import './App.scss';
import clamp from 'lodash-es/clamp'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'

const Card = ({ item, del }) => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 2)
    set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
  })
  return <animated.div className="Card" {...bind()} style={{ transform: xy.interpolate((x, y) => { del(x, item);return `translate3d(${x}px,${y}px,0)`}) }}>{item}</animated.div>
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: ['Alexandre', 'Thomas', 'Lucien']
    }
  }

  del = (x, item) => {
    if(x > 100){
      this.setState({
        data: this.state.data.filter(i => { return i !== item})
      })
    }
  }
 
  render(){
    console.log(this.state.data);
    return (
      <main>
        {this.state.data.map(i => {
          return <Card item={i} del={this.del} />
        })}
      </main>
    );
  }
}

export default App;
