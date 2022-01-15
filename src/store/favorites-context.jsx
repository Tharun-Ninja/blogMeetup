import {createContext, useState} from 'react';

const FavoritesContext = createContext(
    {
        favorites: [],
        totalFavorites: 0,
        addFavorite: (favoriteMeetup) => {},
        removeFavorite: (meetupId) => {},
        itemIsFavorite: (meetupId) => {}
    }
)

export const FavoritesContextProvider = (props) => {

    const [userFavorites, setuserFavorites] = useState([]);

    const addFavoritesHandler = (favoriteMeetup) => {
        setuserFavorites((oldUserFavorites) => {
            return oldUserFavorites.concat(favoriteMeetup)
        });
    }

    const removeFavoritesHandler = (meetupId) => {
        setuserFavorites((oldUserFavorites) => {
            return oldUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    const itemIsFavoritesHandler = (meetupId) => {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemIsFavoritesHandler
    };

    return  <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;