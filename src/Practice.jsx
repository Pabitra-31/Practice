import { useState} from 'react'

const Practice = () => {
    let [state,setState] =useState(0)
    function incHandler(){
        setState(state+1)
    }
  return (
    <div>
      <h1>count:{state}</h1>
      <button onClick={incHandler}>incHandler</button>
    </div>
  )
}

export default Practice
