import React from 'react';

function Hero({heroNmae}) {
    if(heroNmae == 'joker') {
        throw new Error ("he is not a hero")
    }
  return (
    <div>
      {heroNmae}
    </div>
  );
}

export default Hero;
