import React from 'react'
import {useLocation} from 'react-router-dom'

function Home() {
  const location=useLocation()
  return (
    <div>
      <h1>hello {location.state.id} from home page welcome</h1>
    </div>
  )
}

export default Home