import React from "react";

const Product = () => {
  return (
    <div className="flex section items-center relative justify-center flex-col bg-gradient-to-t from-[#5D2CA8] to-bg">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="title">
          Generate Invoice
          <br />
          PDFs Instantly
        </h2>
        <p className="description">
          Create professional invoice PDFs effortlessly. Input your details, and
          our SaaS handles the rest—no manual formatting, just accurate,
          ready-to-send invoices every time. Perfect for freelancers and
          businesses alike.
        </p>

        <div className="w-full h-[50rem] bg-secondary/50 border-2 border-white"></div>
      </div>
    </div>
  );
};

export default Product;
