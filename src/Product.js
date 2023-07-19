import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { listReduucer,initialState } from "./ReducerHelper";
import Loding from "./Loding";
import { useFetch } from "./Context";
import Search from "./Search";
import Select from "./SelectData";
import SinglePage from "./SinglePage";
import "./Product.css"
import Module from "./Module";

const Product = () => {
  let [listView, setlistView] = useState(false);
  let [moduleVisible, setModuleVisible] = useState(false);
  const {fetchData, data, sortedData, loading, selectData, selectedProduct, error} = useFetch();
  const {products} = data;
  const [reducerValue, dispatch] = useReducer(listReduucer, initialState)
  const dataToDisplay = sortedData.length ? sortedData : data
  // let dispatch = useDispatch()
  console.log("======= error", error);
  console.log("======= producst", dataToDisplay, 'sortedData.length', sortedData.length);

  useEffect(() => {
    fetchData("https://dummyjson.com/products")
    // axios.get("https://dummyjson.com/products").then((response) => {
    //     // console.log(response);
    // //   setItems(response.data.products);
    // //   console.log(item);
    // console.log("tgtgtgtgt");
    
    //   dispatch({type:"ADD", value:response.data.products})
    // });
  }, []);

  const selectSingleProduct = (selectedId) => {
    // console.log("========= selectedId", selectedId)
    console.log("======= first call");
    selectData(selectedId);
    console.log("======= first call end");
  }
  const listViewHandler =()=>{
    setlistView(true)
  }
  const gridviewHandler =()=>{
    setlistView(false)
  }

  const listViewStyle = listView ? "listViewCss" : "col-md-3 mb-5"

  // let product = useReducer((state)=>state)

  // console.log("reducerValue", reducerValue);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary d-flex justify-content-between align-items-center">
  <a className="navbar-brand text-warning m-3" href="#">Royal Kart</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse d-flex w-45 justify-content-between align-items-center" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto d-flex justify-content-between p-2 align-items-center">
      <li className="nav-item active">
        <a className="nav-link text-light" href="#">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link text-light d-flex justify-content-between" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sorting <Select/>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled text-light" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0 d-flex justify-content-center p-1 align-items-center">
      
      {/* <button className="btn btn-outline-success text-light" type="submit">Search</button> */}
      <i className="fa-solid fa-cart-shopping m-3 text-light fs-3"></i>
      <Search/>
    </form>
    
  </div>
    </nav>
    <div className="button_div">
    <button onClick={gridviewHandler} className="grid btn btn-success p-2 m-1">Grid View</button>
    <button onClick={listViewHandler} className="list btn btn-danger p-2 m-2">List View</button>

    </div>

    <div className="container">
      <div className="row mt-2">
      
      {dataToDisplay.length===0 && !error && <Loding/>}
      {!dataToDisplay.length && error && <Module />}
        {selectedProduct ? <SinglePage/> : dataToDisplay &&
          dataToDisplay.map((name, index) => {
            return (
              <div key={index} className={listViewStyle}>
                <div className="card h-30 d-flex text-center p-4 change">
                 <div>
                 <img
                    className="card-img-top w-100"
                    src={name.images[0]}
                    height="150px"
                    width="150px"
                  />
                 </div>
                 <div className="details_section">
                 <h2 className="text">{name.brand}</h2>
                  <h3 className="text">{name.title}</h3>
                  <p className="text">{name.description}</p>
                  <h4> ${name.price}.00 </h4>
                  <button onClick={() =>selectSingleProduct(name.id)} className="btn btn-light text-success">More Details</button>
                  <button className="btn btn-warning m-2" onClick={()=> selectSingleProduct(name.id)}>Add to cart</button>
                 </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
    </>
  );
};
export default Product;
