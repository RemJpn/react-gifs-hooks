import React from 'react';


const Gif = ({ id, setSelectedGifId }) => {
  const src = `https://media2.giphy.com/media/${id}/giphy.gif`;

  const handleClick = () => {
    setSelectedGifId(id);
  };

  return (
    <img src={src} alt="" className="gif" onClick={handleClick} />
  );
};

export default Gif;
