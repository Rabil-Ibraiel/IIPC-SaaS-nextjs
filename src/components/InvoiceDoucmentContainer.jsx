"use client";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import InvoiceDocument from "./InvoiceDocument";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const InvoiceDoucmentContainer = ({ item }) => {
  return (
    <div className="h-[calc(100vh-5rem)] w-screen overflow-x-hidden overflow-y-auto flex flex-col items-center justify-center bg-gradient-to-t from-[#5D2CA8] to-bg">
      <div className="container h-full w-full ">
        <h1 className="title mb-8 md:mb-24">Your PDF is Ready!</h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 h-full md:h-[399px] w-full ">
          <PDFViewer
            showToolbar={false}
            className="h-1/2 w-full md:w-1/3 md:h-[399px] border-4 rounded border-secondary"
          >
            <InvoiceDocument item={item} />
          </PDFViewer>

          <div className="w-full h-1/2 md:w-2/3 md:h-full flex flex-col md:justify-between ">
            <h2 className="mt-4 text-5xl font-extrabold">
              {item.companyName}'s Invoice
            </h2>

            <div className="flex flex-col items-start gap-2 md:gap-4 mt-8 md:mt-0">
              <Link
                className="flex items-center gap-2 text-xl md:text-2xl md:mt-8 font-medium bg-primary text-black py-1 px-4 w-full md:w-fit  justify-center md:py-2 md:px-12 rounded"
                href={"/generate"}
                prefetch={false}
              >
                <FaArrowAltCircleLeft /> Edit Your PDF!
              </Link>
              <PDFDownloadLink
                document={<InvoiceDocument item={item} />}
                fileName={item.InvoiceName}
                className="w-full md:w-fit md:h-fit"
              >
                <button className="text-xl md:text-5xl font-extrabold bg-bg text-text py-2 md:px-12 rounded flex items-center w-full md:w-fit  justify-center">
                  Download
                </button>
              </PDFDownloadLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDoucmentContainer;
