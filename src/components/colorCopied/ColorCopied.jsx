import { useState } from "react"
import useCopyToClipboardData from "../../hooks/useCopyToClipboardData"
import './ColorCopied.css'

const ColorCopied = () => {
    const [input_value, setInput_value] = useState("")
    const [copied, copy] = useCopyToClipboardData(input_value)

    function getTexta(e) {
        setInput_value(e.target.value)
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter text" 
                onChange={(e) => getTexta(e)} 
                value={input_value} />

            <i onClick={copy} className="fa fa-clipboard style" aria-hidden="true"></i>
            
            {/* <p>{copied ? "Copied" : "Click to copy"}</p> */}
            {copied ? <p style={{ "color": "green" }}>Copied</p> : <p style={{ "color": "white" }}>Click to copy</p>}
       
            <textarea name="" id="" onChange={(e) => getTexta(e)} >
                {input_value}
            </textarea>
            
       
        </div>
    )
}

export default ColorCopied
