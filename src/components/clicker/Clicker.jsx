import useCounter from "../../hooks/useCounter"



export default function Clicker() {

    const {count, increment, decrement, multiply} = useCounter()

  return (
    <div>

        <p>Clicker: {count}</p>
        <button onClick={increment}>Plus</button>
        <button onClick={decrement}>Minus</button>
        <button onClick={multiply}>Multiply</button>
    </div>
  )
}
