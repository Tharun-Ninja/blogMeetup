import React from 'react';
import NewMeetupForm from './NewMeetupForm';
import { useNavigate } from 'react-router-dom';

const NewMeetup = () => {
    const navigate = useNavigate();

    const addMeetupHandler = (meetupData) =>{
        fetch(
            'https://blogapp-afb27-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/',{ replace: true });
        })
    }

    return (
        <section className='mt-3'>
            <h1>Add a Blog Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetup
