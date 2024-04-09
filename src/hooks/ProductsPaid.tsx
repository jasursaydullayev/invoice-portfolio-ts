import { useState } from "react"

export function ProductsPaid() {  
    const [discard, setDisCard] = useState(false)   
    const [paid, setPaid] = useState(false)   
  return{discard, setDisCard, paid, setPaid}
}

export default ProductsPaid