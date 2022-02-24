import { urlAlphabet } from 'nanoid';
import React from 'react';

const NotFound = () => {
    return (
        <div className='Box'>
          <div className='Box2'>
            <p className='P1'>404 Not Found</p>
            <p className='P2'>The page you are looking for is not available</p>
            <button className='Button'><a className='Take-me-back' href = "/">Take me back!</a></button>
          </div>
        </div>
    )
}

export default NotFound;