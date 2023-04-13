import React from "react";

const Partners = () => {

  return (
    <section className="h-100" id="partners">
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-end justify-content-md-center pb-5">  
          <div className="col-6 offset-3 offset-md-0 col-md-3 text-center">
            <img className="w-100" src="/images/partners/SANDBOX.png"/>
          </div>
          <div className="col-6 offset-3 offset-md-0 col-md-3 text-center">
            <img className="w-100" src="/images/partners/NVIDIA.png"/>
          </div>
          <div className="col-6 offset-3 offset-md-0 col-md-3 text-center">
            <img className="w-100" src="/images/partners/DCL.png"/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Partners;
