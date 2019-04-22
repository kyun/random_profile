import React from 'react';
import './BottomBar.scss';

import { Like, Cancel, Star } from 'components/Icons';
import CircleButton from 'components/CircleButton';

const BottomBar = ({ like, dislike, superlike }) => {
  return (
    <div className="BottomBar">
      <CircleButton icon={<Cancel width={30} />} onClick={dislike}/>
      <CircleButton icon={<Star width={36} />} onClick={superlike}/>
      <CircleButton icon={<Like width={36} />} onClick={like}/>
    </div>
  )
}

export default BottomBar;