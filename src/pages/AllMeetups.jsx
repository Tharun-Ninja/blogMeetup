import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react'

const AllMeetups = () => {

  const [isLoading, setisLoading] = useState(true);
  const [meetupData, setmeetupData] = useState([])
  
  useEffect(() => {
    fetch('https://blogapp-afb27-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json')
    .then(response => {
      return response.json()
    }).then(data => {
      let meetupFinalData = []
      
      for (const key in data){
        const subData = {
          id: key,
          ...data[key]
        }
        meetupFinalData.unshift(subData)
      }
      
      setmeetupData(meetupFinalData)
      setisLoading(false)
    })
  }, [])

  if(isLoading === true){
    return (
      <div className="spinner-border position-absolute top-50 start-50" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }
  else{
    return (
        <section>
            <h2 className='my-4 text-center'>All Blog Meetups</h2>
            <MeetupList data={meetupData} />
            
        </section>
    )
  }
}

export default AllMeetups
