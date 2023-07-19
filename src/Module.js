import React from "react";
import { useCallback } from "react";
import { useFetch } from "./Context";
// import './Loading.css'

const Module = () => {

    const {error} = useFetch()
    
  return (
    <div className="module_section">
      <div className="popup">
        <div className="pop_section">
          <h3 className="h3_field">Input field</h3>
          <p className="p_tag">{error.message}</p>
          <button className="btn_ok">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Module;
