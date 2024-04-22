import React from 'react'
import About from './About'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useCollection } from '../../../hooks/useCollection'
import Portfolio from './Portfolio'

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error, loading } = useCollection('userProfile', ["uid", "==", user.uid])


  // console.log('documents: ', documents)
  // console.log('user: ', user.uid)
  // console.log('user1: ', user)
  // console.log('displayPortfolio: ', displayPortfolio)


  const renderContent = () => {
    return (
      <>
        {(documents.length > 0)
          ?
          <Portfolio userDetails={documents} currentUser={user} />
          :
          <About uid={user.uid} />
        }
      </>)
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && renderContent()}
      {error && <p>Error: {error}</p>}

    </div>
  )
}

export default Home