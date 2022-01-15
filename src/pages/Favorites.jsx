import React from 'react'
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

const Favorites = () => {
    const favoritesctx = useContext(FavoritesContext);
    let content;

    if(favoritesctx.totalFavorites === 0){
        content = <p>You got no favorites yet !! Start adding some? </p>
    }
    else{
        content = <MeetupList data={favoritesctx.favorites} />
    }

    return (
        <section>
            <h2 className='my-4 text-center'>Favorite Blog Meetups</h2>
            {content}
            
        </section>
    )
}

export default Favorites
