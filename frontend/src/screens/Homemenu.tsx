
import {Link} from 'react-router-dom'


const Homemenu = () => {
  return (
    <div className='home'>
    <h1>Welcome</h1>
    <h1>To</h1>
    <h1>Mubleen Quiz</h1>
    <div>
        <button><Link to={'/subjects'} className='button-link'>Click here to continue</Link></button>
    </div>
    
    </div>
  )
}

export default Homemenu