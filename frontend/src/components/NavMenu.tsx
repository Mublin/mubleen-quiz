import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/useUser'
// import reactImg from '../'
const NavMenu = () => {
    const {state, logOutHandler} = useContext(UserContext)
    const {user} = state
  return (
    <div>
        <nav>
            <div className="nav-left" style={{height: '70px', width: '70px', cursor: 'pointer'}}>
                <img src="" alt="img"  />
            </div>
            <div className="nav-right">
                <ul>
                    <Link className='nav-link' to={'/'}><li className="nav-items">Home</li></Link>
                    <Link className='nav-link' to={'/leaderboard'}><li className="nav-items">Leaderboard</li></Link>
                    <Link className='nav-link' to={'/about'}><li className="nav-items">About</li></Link>
                    {user ? <Link className='nav-link' to={'/profile'}><li className="nav-items">{user.username}<i  style={{marginRight: '4px'}} className="fa-solid fa-user fa"></i></li></Link> :<Link className='nav-link' to={'/signin'}><li className="nav-items">Login/Sign-up</li></Link>}
                    {user ? <button onClick={logOutHandler} style={{margin: 0}}> Log-out</button> : ''}
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavMenu