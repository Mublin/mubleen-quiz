import React from 'react'
import {Link} from 'react-router-dom'
import CountdownTimer from '../components/Counter'
const SubjectPage = () => {
  return (
    <div className='subject'>
        <div className="cube">
            <div className="choose">
                <h3>Choose your Subject</h3>
            </div>
            <div className="subject-s">
            <Link to='/maths' className='subj'><button>Mathematics</button></Link>
            <Link to='/eng-lang' className='subj'><button>English Language</button></Link>
            <Link to='/chemistry' className='subj'><button>Chemistry</button></Link>
            <Link to='/biology' className='subj'><button>Biology</button></Link>
            <Link to='/physics' className='subj'><button>Physics</button></Link>
            </div>
        </div>
    </div>
  )
}

export default SubjectPage