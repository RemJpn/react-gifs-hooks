import React, { useState } from 'react';

import SearchBar from './searchbar';
import Gif from './gif';
import GifList from './giflist';

const App = () => {
  const [selectedGifId, setSelectedGifId] = useState('786qVQHXMJhnO');
  const [gifList, setGifList] = useState([]);

  return (
    <div>
      <div className="left-scene">
        <SearchBar setGifList={setGifList} />
        <div className="selected-gif">
          <Gif id={selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifList={gifList} setSelectedGifId={setSelectedGifId} />
      </div>

    </div>

  );
};

export default App;
