import React from 'react';
import Spacer from '@/app/components/Spacer';

function UserScore({user, score, position}) {

  return (
    <div className='full-width row space-between middle'>
      <div className='row middle'>
        <span className='title-small-b'>{position}</span>
        <Spacer width={30}/>
        <span className='title-small'>{user}</span>
      </div>
      <span className='title-small-b'>{score}</span>
    </div>
  );
}

export default UserScore;
