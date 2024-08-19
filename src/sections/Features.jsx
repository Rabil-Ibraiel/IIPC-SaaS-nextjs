import React from "react";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";

const Features = () => {
  return (
    <div
      id="features"
      className="flex items-center relative justify-center flex-col section"
    >
      <div className="container flex items-center justify-center flex-col">
        <h2 className="title">
          Streamlined
          <br />
          Invoice Creation
        </h2>
        <p className="description">
          Experience a seamless invoicing solution designed to make your life
          easier. Our SaaS app provides everything you need to create,
          customize, and manage invoices with minimal effort.
        </p>

        <div className="flex flex-wrap justify-center gap-6 items-stretch">
          <div className="flex flex-col items-center gap-4 text-center border-2 border-text/60 rounded-lg py-6 px-3 max-w-96">
            <FaFileInvoiceDollar className="text-7xl bg-white text-black py-2 px-4 rounded" />
            <h3 className="text-3xl font-medium">Automated Invoicing</h3>
            <p className="text-lg text-text/80">
              Generate professional invoices in seconds. Customize templates and
              let the system handle taxes, discounts, and currencies.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 text-center border-2 border-text/60 rounded-lg py-6 px-3 max-w-96">
            <BsSuitcaseLgFill className="text-7xl bg-white text-black py-2 px-4 rounded" />
            <h3 className="text-3xl font-medium">Client Management</h3>
            <p className="text-lg text-text/80">
              Organize client details in one place. Track billing history and
              preferences for smooth invoicing.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 text-center border-2 border-text/60 rounded-lg py-6 px-3 max-w-96">
            <MdAnalytics className="text-7xl bg-white text-black py-2 px-4 rounded" />
            <h3 className="text-3xl font-medium">Instant Analytics</h3>
            <p className="text-lg text-text/80">
              Get real-time insights on your invoices. Monitor payments, track
              overdue bills, and manage cash flow easily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
