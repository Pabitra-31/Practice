export const initialState = [];
export const listReduucer = (state, action) => {
  if (action.type == "ADD") {
    return [...state, ...action.value];
  }
  return initialState;
};

const reducer = (state, action) => {
  console.log("====action", action.payload, action.type);
  switch (action.type) {
    case "1-10":
      return {
        ...state,
        sortedData: [...state.sortedData].sort((a, b) => {
          return a.id - b.id;
        }),
      };

    case "10-1":
      return {
        ...state,
        sortedData: [...state.sortedData].sort((a, b) => {
          return b.id - a.id;
        }),
      };

    case "A-Z": {
      console.log("===== inside a to z");
      const sortdata = {
        ...state,
        sortedData: [...state.data].sort((a, b) => {
          // console.log("======== asjdaksjhdkajshd",a);
          return a.brand.localeCompare(b.brand);
        }),
      };
      console.log("======= after sorted", sortdata);
      return sortdata;
    }

    case "Z-A":
      return {
        ...state,
        sortedData: [...state.sortedData].sort((a, b) => {
          return b.brand.localeCompare(a.brand);
        }),
      };

    case "SEARCH":
      // let x=state.data
      let x = state.data.filter((data) => {
        return data.brand.toLowerCase().includes(action.payload.toLowerCase());
      });
      console.log("filter data from fetch reducer", x);
      console.log(" search action", action.payload);
      return {
        ...state,
        sortedData: x,
      };

      case "SELECT":
      
      let y = state.data.find(item => {
        console.log("========= selectedP in find", item.id , action.payload, item.id === action.payload )
       return item.id === action.payload
    })
        
      return{
        ...state,
        selectedProduct:y
      }

      case "REMOVE_PRODUCT":
        return{
            ...state,
            selectedProduct:null
          }

    case "FETCHED":
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
      };
    case "LODING":
      return {
        ...state,
        loading: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
      case 'ADD TO CART':
        let z = state.data.find(item => {
          console.log("========= selectedP in find", item.id , action.payload, item.id === action.payload )
         return item.id === action.payload
      })

  }
};

export default reducer;
