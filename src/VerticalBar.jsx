// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { NavLink } from 'react-router-dom'

const VerticalBar = ({ display, setClose }) => {
  return (
    <div className={`min-h-screen vertical lg:hidden fixed ${display ? 'flex flex-col' : 'hidden'} top-0 left-0 z-50 min-w-[200px] bg-yellow-100 text-black`}>
      <ul className='w-full h-auto flex flex-col gap-10'>
        <li className='w-full p-4' onClick={() => { setClose(!display) }}>
          <FontAwesomeIcon icon={faClose} />
        </li>
        <li className='w-full'>
          <NavLink
            className='block p-4 w-full hover:bg-yellow-200 transition-colors'
            to='/'
            onClick={() => setClose(false)}
          >
            Home
          </NavLink>
        </li>
        <li className='w-full'>
          <NavLink
            className='block p-4 w-full hover:bg-yellow-200 transition-colors'
            to='/dashboard'
            onClick={() => setClose(false)}
          >
            Analytics
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default VerticalBar;
