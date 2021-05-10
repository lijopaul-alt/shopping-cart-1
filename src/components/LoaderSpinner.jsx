import React from "react";
import Loader from "react-loader-spinner";
function LoaderSpinner() {
  return (
    <div className='spinner'>
      <Loader type='ThreeDots' color='#0500ff' height={100} width={100} />
    </div>
  );
}

export default LoaderSpinner;
