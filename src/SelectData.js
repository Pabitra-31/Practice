import React, { useState,useEffect } from 'react'
import { useFetch } from './Context'

function Select() {
    // let [value, setvalue] = useState('1-10')
    let {increment}=useFetch()
    function selecthandler(e) {
          
        increment(e.target.value)
        
    }
    
    // useEffect(()=>{
    //     console.log('hello i am useEffect from select')
    //     increment(value)
    // },[value])
     
    
    // console.log(value);
    return (
        <div className='d-flex flex-end'>
            <select onChange={selecthandler}>
                <option value="1-10">1-10</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="10-1">10-1</option>
            </select>
        </div>
    )
}

export default Select
