import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <div className="flex flex-col items-center section">
      <div className="container flex items-center justify-center flex-col">
        <h2 className="title">
          Simplify Your
          <br />
          Invoicing Process
        </h2>
        <p className="description">
          Generate professional invoice PDFs in minutes. Input your details,
          customize, and download—fast, easy, and accurate.
        </p>
        <Link  href="/generate" className="button text-2xl font-semibold">
          Get Access
        </Link>
      </div>
    </div>
  );
};

export default Cta;
