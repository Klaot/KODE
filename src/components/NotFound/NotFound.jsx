import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <div className='not-found'>
        <h1>Какой-то сверхразум всё сломал!</h1>
        <p>Постараемся всё быстро починить..</p>
        <Link to='/'>Попробовать снова.</Link>
    </div>
  )
}

export default NotFound