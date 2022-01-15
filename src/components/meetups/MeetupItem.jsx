import React from 'react'
import {useContext} from 'react'
import FavoritesContext from '../../store/favorites-context';

const MeetupItem = (card) => {

    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(card.id);

    const toggleFavoriteStatusHandler = () =>{
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(card.id)
        }
        else {
            favoritesCtx.addFavorite({
                id: card.id,
                title: card.title,
                address: card.subtitle,
                description: card.text,
                image: card.img
            })
        }
    }

    return (
        <li className='card shadow mb-3' id={card.id}>
            <img src={card.img} alt={card.title} className='card-img-top' />
            <div className="card-body">
                <div className="card-title h3">{card.title}</div>
                <div className="card-subtitle text-muted">{card.subtitle}</div>
                <div className="card-text mt-2">{card.text}</div>
                <button className="btn btn-primary my-2" onClick={toggleFavoriteStatusHandler} >
                    {itemIsFavorite ? 'Remove from Favorite' : 'To Favorites' }
                </button>
            </div>
        </li>
    )   
}

export default MeetupItem
