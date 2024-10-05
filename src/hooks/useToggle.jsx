// rafce

import { useState } from "react"

export default function useToggle() {

    const [activate, setActivate] = useState(false)
    const [chColorBG, setChColorBG] = useState(false)
    console.log(activate)

    
    function change(){
        setActivate(!activate)
    }

    function changeBGFunction(){
        setChColorBG(!chColorBG)
    }


  return {
    activate, change, chColorBG, changeBGFunction
  }
}
