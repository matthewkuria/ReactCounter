import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
function minus(){
  setCount(prevCount => prevCount -1)
}
function add(){
  setCount(prevCount => prevCount +1)
}
  return (
    <> <h1 className='counter--heading'>React Counter</h1>
        <div className="counter">     
      <button className="counter--minus" onClick={minus}>-</button>
      <div className="heading">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>+</button>
    </div>
    <h5>Created by Matt &copy; 2023</h5>
    </>
   
  )
}

export default App
