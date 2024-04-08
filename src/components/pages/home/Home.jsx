import React, { useState } from 'react'
import About from './About'
import { useAuthContext } from '../../../hooks/useAuthContext'

const Home = () => {
  const { user: { uid } } = useAuthContext();
  const [displayPortfolio, setDisplayPortfolio] = useState(false)



  console.log('user: ', uid)
  console.log('displayPortfolio: ', displayPortfolio)

  return (
    <div>
      {!displayPortfolio && <About uid={uid} setDisplayPortfolio={setDisplayPortfolio} />}
      {displayPortfolio && <p>Hello Welcome</p>}
    </div>
  )
}

export default Home