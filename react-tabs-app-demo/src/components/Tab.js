import React from 'react'

const Tab = ({label, isActive, handleClick}) => {
  return (
    <li className={isActive ? "is-active" : ""} 
        onClick={() => handleClick()}>
        <a>{label}</a>
    </li>
  )
}

export default Tab
