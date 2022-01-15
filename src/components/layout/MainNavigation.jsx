import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import FavoritesContext from '../../store/favorites-context'

const MainNavigation = () => {
    const favoritectx = useContext(FavoritesContext);

    const [isNavCollapsed, setisNavCollapsed] = useState(true);
    const handleNavCollapse = () => setisNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <Link to='/' className='navbar-brand h1'>Blog Meetup</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarNavAltMarkup">
                    <div className='navbar-nav'>
                        <Link to='/' className='nav-link mx-2' >All Blog Meetups</Link>
                        <Link to='/new-meetup' className='nav-link mx-2' >Add New blog Meetup</Link>
                        <Link to='/favorites' className='nav-link mx-2' >
                            My Favorite blog <span className="badge bg-secondary">{favoritectx.totalFavorites}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default MainNavigation
