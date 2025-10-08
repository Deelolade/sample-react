import React, {useState} from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);

    const handleIncrement =()=>{
        setCount(prev=> prev + 1);
    }
    const handleDecrement =()=>{
        if(count > 0){
            setCount(prev => prev - 1);
        }
    }
  return (
    <div className="counter-container">
      <h1 className="counter-title">React Counter</h1>

      <div className="counter-box">
        <button onClick={handleDecrement} className="counter-btn decrement">
          −
        </button>

        <span className="counter-value">{count}</span>

        <button onClick={handleIncrement} className="counter-btn increment">
          +
        </button>
      </div>
    </div>
  )
}

export default UseState
