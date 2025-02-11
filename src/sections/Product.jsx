import Image from "next/image";
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

        <div className="w-full h-[300px] md:h-[400px] lg:h-[650px] max-w-lg md:max-w-3xl lg:max-w-6xl bg-secondary/50 border-2 border-white relative overflow-hidden rounded-3xl">
          <Image src={"/product.webp"} alt="" className="w-full h-full object-cover" fill/>
        </div>
      </div>
    </div>
  );
};

export default Product;
