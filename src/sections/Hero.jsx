import React from "react";

const Hero = () => {
  return (
    <div
      id="about"
      className="flex section h-screen items-center relative justify-center flex-col bg-gradient-to-b from-[#200D42] from-0% via-[#4F21A1] via-40%  to-transparent to-82%"
    >
      <div className="mt-24 md:mt-4">
        <div className="container flex items-center justify-center flex-col">
          <span className="feature">Version 2.0 is here</span>
          <h1 className="title">
            Instant Invoice
            <br />
            PDF Creator
          </h1>
          <p className="description ">
            Create polished, customizable invoices in seconds. Our PDF generator
            streamlines your billing process, making invoicing quick and
            professional. Start saving time today!
          </p>

          <button className="button absolute -bottom-6 text-lg lg:text-2xl">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
