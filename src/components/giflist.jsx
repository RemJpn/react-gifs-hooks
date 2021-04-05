import React from 'react';

import Gif from './gif';

const GifList = ({ gifList, setSelectedGifId }) => {
  const renderList = gifList.map((gif) => {
    return <Gif id={gif.id} key={gif.id} setSelectedGifId={setSelectedGifId} />;
  });

  return (
    <div className="gif-list">
      {renderList}
    </div>

  );
};

export default GifList;
