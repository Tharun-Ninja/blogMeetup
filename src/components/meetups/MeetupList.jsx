import React from 'react'
import MeetupItem from './MeetupItem'

const MeetupList = ({data}) => {
    return (
        <div>
            {
                data.map(meetup => {
                    return <MeetupItem
                                key={meetup.id}
                                id={meetup.id}
                                img={meetup.image}
                                title={meetup.title} 
                                subtitle={meetup.address}
                                text={meetup.description} 
                            />
                })
            }
        </div>
    )
}

export default MeetupList
