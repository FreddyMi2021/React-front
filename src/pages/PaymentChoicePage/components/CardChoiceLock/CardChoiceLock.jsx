import React from 'react';
import lock164 from '../Assets/lock164.png';

function CardChoiceLock(props) {
  return (
    <>
      <div
        className="text-xl text-white font-medium rounded-lg text-center w-64 flex justify-evenly flex-col pb-12"
        style={{ background: '#5DBE94', height: '480px' }}
      >
        <h3 className="pb-8">{props.title}</h3>
        <div classname="">
          <img className="w-52 ml-6" src={lock164} alt="lock image" />
        </div>
      </div>
    </>
  );
}

export default CardChoiceLock;
