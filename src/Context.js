import { createContext, useContext, useEffect, useReducer } from "react";
// import reducer from '../reducer/fetchReducer'
import reducer from "./ReducerHelper";

export let fetchContext=createContext();


const intialState={
    loading:false,
    data:[],
    error:'',
    sortedData:[],
    cartItem:[],
    selectedProduct: null
}

const FetchContextProvider =({children})=>{
    

     function fetchData(url)
    {
        fetch(url).then((data)=>{
            console.log("======= loading in first res");
            dispatch({type:"LODING", payload:true})
            // throw new Error('bad news')
            const res = data.json()
            return res;
        }).then ((res)=>{
            dispatch({type:"FETCHED", payload:res.products})
            console.log(res)
        }).catch((err)=>{
            console.log("======== loading in err res", err.message);
            dispatch({type:"ERROR",payload:err})
            console.log(err)
        })
    }
    let  increment=(value)=>{
        return dispatch({type:value, payload:value})
    }
    // let  searchTerm =(value)=>{
    //     return dispatch({type:'SEARCH_DATA', payload:data})
    // }

    let search =(data)=>
    {
        // console.log('fetch data',data)
         dispatch({type:"SEARCH",payload:data})
    }
    const selectData = (id) => {
        // console.log("====== selected id in context", id);
        console.log("======= second call")
        
        dispatch({ type: 'SELECT', payload: id });
        console.log("======== second call end");
      };
    const removeData = () => {
        dispatch({ type: 'REMOVE_PRODUCT'});
      };
   let [state,dispatch] =useReducer(reducer,intialState)
   
   const cartItem = (id) =>{
    dispatch({type: 'ADD TO CART', payload:id})
   }

    return <fetchContext.Provider value={{...state,fetchData,increment,search,selectData, removeData,cartItem}}>
        {children}
    </fetchContext.Provider>
   
}
export const useFetch=()=>{
    return useContext(fetchContext)
  }
export default FetchContextProvider

