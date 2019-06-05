import React, { useState } from 'react';
import FavouriteToggle from './FavouriteToggle';

const ScoreCounter = () => {
  const [score, setScore] = useState(0);

  const handleIncrement = () => {
    setScore(score + 1);
  }

  const handleDecrement = () => {
    setScore(score - 1);
  }

  return (
    <div>
      {score}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

const Post = ({ data }) => {
  const [displayBody, setDisplayBody] = useState(0);

  return (
    <li
      style={{
        backgroundColor: 'white',
        color: '#333',
        margin: '5px',
        padding: '10px',
        fontSize: '11pt',
        cursor: 'pointer'
      }}
    >
      <span
        onClick={() => setDisplayBody(!displayBody)}
        style={{ fontWeight: '900' }}
      >{data.title}</span>

      <FavouriteToggle style={{ float: 'right' }} />
      
      <ScoreCounter />

      {displayBody ? (<p>{data.body}</p>) : ''}
    </li>
  )
}

export default Post;
