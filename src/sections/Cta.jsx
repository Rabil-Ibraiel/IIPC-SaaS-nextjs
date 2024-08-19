import React from "react";

const Cta = () => {
  return (
    <div className="flex flex-col items-center section">
      <div className="container flex items-center justify-center flex-col"><h2 className="title">
        Simplify Your
        <br />
        Invoicing Process
      </h2>
      <p className="description">
        Generate professional invoice PDFs in minutes. Input your details,
        customize, and download—fast, easy, and accurate.
      </p>

      <div className="">
        <form className="text-lg lg:text-2xl flex flex-col  md:flex-row gap-2">
          <input
            type="email"
            required
            className="bg-gray-600/60 font-medium py-2 px-4 rounded-lg border-none outline-none"
            placeholder="your@email.com"
          />
          <button className="button">Get Access</button>
        </form>
      </div> </div>
    </div>
  );
};

export default Cta;
