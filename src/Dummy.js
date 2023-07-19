import React, { useEffect, useReducer } from 'react';
import Loding from './Loding';

const initialState = {
  data: [],
  sortedData: [],
  loading: true,
  error: null,
  sortOption: 'asc', // Default sort option is ascending (A-Z)
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        sortedData: action.payload,
        loading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'SORT_DATA':
      const sortOption = action.payload;

      const sortedData = [...state.data].sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (sortOption === 'asc') {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });

      return {
        ...state,
        sortedData,
        sortOption,
      };
    default:
      return state;
  }
};

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      })
      .catch(error => dispatch({ type: 'FETCH_ERROR', payload: error }));
  }, []);

  const handleSortChange = e => {
    const sortOption = e.target.value;
    dispatch({ type: 'SORT_DATA', payload: sortOption });
  };

  if (state.loading) {
    return <div><Loding/></div>;
  }

  if (state.error) {
    return <div>Error: {state.error.message}</div>;
  }

  return (
    <div>
      <select onChange={handleSortChange} value={state.sortOption}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <select>
        {state.sortedData.map && (item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MyComponent;