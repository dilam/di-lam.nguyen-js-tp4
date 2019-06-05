import React, { useState } from 'react';

const FavouriteToggle = ({ isActive = false, style = {} }) => {
  const [isFavourite, setIsFavourite] = useState(isActive);

  return (
    <span
      onClick={() => setIsFavourite(!isFavourite)}
      style={style}
    >{isFavourite ? '♥️' : '♡'}</span>
  )
}

export default FavouriteToggle;
