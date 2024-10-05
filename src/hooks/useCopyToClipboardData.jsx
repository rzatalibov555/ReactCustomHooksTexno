import { useState } from 'react'

export default function useCopyToClipboardData(data) {

    const [copied, setCopied] = useState(false)
    // console.log(copied)
    
    const copy = () => {
        navigator.clipboard.writeText(data)
            .then (() => setCopied(true))
            .catch(() => setCopied(false))
    }

//   return {copied, copy}
  return [copied, copy]
    
  
}
