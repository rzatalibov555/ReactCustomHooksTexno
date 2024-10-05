
import useCounter from "../../hooks/useCounter"


export default function Clicko() {

    const {count, increment, decrement, multiply} = useCounter()

  return (
    <div>
        
        <p>Clicko: {count}</p>
        <button onClick={increment}>Plus</button>
        <button onClick={decrement}>Minus</button>
        <button onClick={multiply}>Multiply</button>

    </div>
  )
}
