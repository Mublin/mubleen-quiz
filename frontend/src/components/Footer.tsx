import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <footer>
            <h3 style={{fontSize: '28px'}}>All right reserved {new Date().getFullYear()}</h3>
        </footer>
    </div>
  )
}

export default Footer