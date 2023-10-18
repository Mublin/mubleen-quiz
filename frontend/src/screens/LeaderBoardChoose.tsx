import React from 'react'
import { Link } from 'react-router-dom'

const LeaderBoardChoose = () => {
    return (
        <div className='subject'>
            <div className="cube">
                <div className="choose">
                    <h3>Choose the leaderboard subject</h3>
                </div>
                <div className="subject-s">
                <Link to='/maths/leaderboard' className='subj'><button>Mathematics</button></Link>
                <Link to='/eng/leaderboard' className='subj'><button>English Language</button></Link>
                <Link to='/chemistry/leaderboard' className='subj'><button>Chemistry</button></Link>
                <Link to='/biology/leaderboard' className='subj'><button>Biology</button></Link>
                <Link to='/physics/leaderboard' className='subj'><button>Physics</button></Link>
                </div>
            </div>
        </div>
      )
}

export default LeaderBoardChoose