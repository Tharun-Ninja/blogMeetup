import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AllMeetups from './pages/AllMeetups'
import Favorites from './pages/Favorites'
import NewMeetup from './pages/NewMeetup'
import MainNavigation from './components/layout/MainNavigation'

const App = () => {
  return (
    <div>
      <MainNavigation />
      <div className='container' style={{maxWidth:'400px'}}>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/new-meetup" element={<NewMeetup />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>

    </div>
  )
}

export default App

