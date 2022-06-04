import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className='tc bg-light-green dib ba3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
