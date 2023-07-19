import React, { useCallback, useEffect, useState } from 'react'
import { useFetch } from './Context'

function Searching() {
    let { search, data } = useFetch()
    let [text, setText] = useState('')
    // console.log('seraching jsx', sortedData)
    function textHandler(e) {
        console.log('shivam')
        setText(e.target.value)
        // search(text)
    }
    const searchFilter = useCallback(() => {
        console.log('hello i am useCallback')
        let x = setTimeout(() => {
            console.log('shivam')
            search(text)
        }, 1000)
        return () => {
            clearTimeout(x)
        }
    }, [text])
    return (
            <div className="input-group">
                <div className="form-outline">
                    <input type="text" placeholder="Search" value={text} onChange={textHandler} id="form1" className="form-control" />
                </div>
                <button onClick={searchFilter} type="button" className="btn btn-primary">
                    SEARCH
                </button>
            </div>
    )
}

export default Searching;