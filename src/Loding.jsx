import React from "react";
import "./Loading.css";

import { FallingLines } from "react-loader-spinner";
import Overlay from "./Overlay";

function Loding() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      </div>
      <Overlay/>
    </div>
  );
}

export default Loding;