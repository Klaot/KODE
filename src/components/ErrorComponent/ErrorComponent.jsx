import React from 'react'

function ErrorComponent() {
  return (
    <div>
        <img src={NotFoundImg} alt='not found img'/>
        <h1>Какой-то сверхразум все сломал</h1>
        <p>Постараемся быстро починить...</p>
        <Link to='/'>Попробовать снова</Link>
    </div>
  )
}

export default ErrorComponent