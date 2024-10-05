import React from 'react'
import './Menu.css'
import useToggle from '../../hooks/useToggle'


const Menu = () => {

    const {activate, change, chColorBG, changeBGFunction} = useToggle()

  return (
    <>
    <div className="navbar_r" style={{"background":chColorBG? "blue": "red"}}>
        <button onClick={change}>{activate ? "Close" : "Open"}</button>
        <button onClick={changeBGFunction}>Change Color</button>
    </div>

    <div className={`Menu ${activate? "show_r" : "" }`}></div>
    </>
  )
}

export default Menu
