"use client";

import { createInvoicePdf } from "@/actions/invoiceForm";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

const Generate = ({ item = {}, cookieDelete }) => {
  const [invoiceItem, setInvoiceItem] = useState(item);
  console.log(Object.keys(invoiceItem));

  const [items, setItems] = useState(
    invoiceItem.items ? invoiceItem.items : []
  );

  const [theme, setTheme] = useState(
    invoiceItem?.theme ? invoiceItem.theme : "default"
  );

  const themes = ["default", "classic", "vintage", "modren"];

  const ref = useRef(null);

  async function handleRemove() {
    setInvoiceItem({});
    setItems([]);
    setTheme("default");
    await cookieDelete();
    ref.current?.reset();
  }

  return (
    <div className="pt-24 overflow-hidden w-full h-fit flex flex-col items-center justify-center">
      <h1 className="title mb-12">Generate Your Invoice!</h1>

      <div className=" w-full lg:w-[70rem] py-12 flex flex-col">
        {Object.keys(invoiceItem).length > 0 && (
          <button
            onClick={handleRemove}
            className="text-text bg-accent py-2 px-12 rounded-lg text-xl font-bold self-end mb-6 mr-12"
          >
            Reset Invoice Form
          </button>
        )}
        <form
          ref={ref}
          action={createInvoicePdf}
          className="flex flex-col gap-12"
        >
          <div className="dataSetContainer">
            <h2 className="dateTypeLabel">invoice data</h2>
            <div className="formDivContainer">
              <label className="label">Company Name:</label>
              <input
                name="companyName"
                className="input"
                type="text"
                placeholder="IIPC"
                defaultValue={invoiceItem?.companyName}
              />
            </div>
            <div className="formDivContainer">
              <label className="label">Invoice Name:</label>
              <input
                name="InvoiceName"
                className="input"
                type="text"
                placeholder="INV-122"
                defaultValue={invoiceItem?.InvoiceName}
              />
            </div>
            <div className="divider" />
          </div>
          <div className="dataSetContainer">
            <h2 className="dateTypeLabel">Date data</h2>
            <div className="formDivContainer">
              <label className="label">Date:</label>
              <input
                name="date"
                className="input"
                type="date"
                defaultValue={invoiceItem?.date}
              />
            </div>
            <div className="formDivContainer">
              <label className="label">Due Date:</label>
              <input
                name="dueDate"
                className="input"
                type="date"
                defaultValue={invoiceItem?.dueDate}
              />
            </div>
            <div className="divider" />
          </div>

          <div className="dataSetContainer">
            <h2 className="dateTypeLabel">Client data</h2>
            <div className="formDivContainer">
              <label className="label">Client Name:</label>
              <input
                name="clientName"
                className="input"
                type="text"
                placeholder="Rabil Ibraiel"
                defaultValue={invoiceItem?.clientName}
              />
            </div>

            <div className="formDivContainer">
              <label className="label">Client Address:</label>
              <input
                name="clientAddress"
                className="input"
                type="text"
                placeholder="Erbil, Ankawa"
                defaultValue={invoiceItem?.clientAddress}
              />
            </div>
            <div className="divider" />
          </div>

          <div className="dataSetContainer">
            <h2 className="dateTypeLabel">items data</h2>
            <div className="flex flex-col gap-6">
              <input
                name="itemsLength"
                type="hidden"
                hidden
                defaultValue={items.length}
              />
              {items.map((item, index) => (
                <div key={item.itemName} className="border border-primary/60 p-2 rounded">
                  <div className="flex items-center justify-between mb-6">
                    <label className=" uppercase text-lg rounded bg-accent text-text px-2">
                      Item {index + 1}:
                    </label>
                    <TiDelete className="text-accent text-4xl cursor-pointer" />
                  </div>
                  <div className="formDivContainer">
                    <label className="label">Item Name:</label>
                    <input
                      name={`itemName-${index}`}
                      className="input"
                      type="text"
                      placeholder="JavaScript Mastry Course"
                      defaultValue={item.itemName}
                    />
                  </div>
                  <div className="formDivContainer">
                    <label className="label">Quantity:</label>
                    <input
                      name={`itemQuantity-${index}`}
                      className="input"
                      type="number"
                      placeholder="5"
                      min={1}
                      max={100}
                      defaultValue={item.itemQuantity}
                    />
                  </div>
                  <div className="formDivContainer">
                    <label className="label">Price:</label>
                    <input
                      name={`itemPrice-${index}`}
                      className="input"
                      type="number"
                      placeholder="546"
                      min={1}
                      max={10000}
                      defaultValue={item.itemPrice}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p
              onClick={() =>
                setItems((prev) => [...prev, Number(prev[prev.length - 1] + 1)])
              }
              className="mt-6 select-none cursor-pointer bg-text text-bg w-fit py-1 px-1 rounded-full"
            >
              <FaPlus className="text-xl" />
            </p>

            <div className="divider" />
          </div>

          <div className="dataSetContainer">
            <h2 className="dateTypeLabel">Footer data</h2>
            <div className="formDivContainer">
              <label className="label">Main:</label>
              <input
                className="input"
                type="text"
                placeholder="Thank you for your business!"
                name="footerMain"
                defaultValue={invoiceItem?.footerMain}
              />
            </div>
            <div className="formDivContainer">
              <label className="label">Body:</label>
              <input
                className="input"
                type="text"
                placeholder="iipc@pdfgenerator.com"
                name="footerBody"
                defaultValue={invoiceItem?.footerBody}
              />
            </div>
            <div className="divider" />
          </div>

          <div className="dataSetContainer">
            <h2 className="dateTypeLabel">Theme data</h2>
            <div className="">
              <label className="label">Choose your favourt theme:</label>

              <div className="flex items-center gap-6 flex-col md:flex-row mt-6">
                {themes.map((item, index) => (
                  <div key={item}
                    className={`flex flex-col  ${
                      theme === item &&
                      "bg-primary px-4 pt-3 pb-4 md:pb-1 rounded overflow-hidden"
                    }`}
                  >
                    <div className="flex items-start gap-1 select-none">
                      <input
                        id={item}
                        className="mt-2 accent-primary border-accent border-2 hidden"
                        type="radio"
                        name="theme"
                        value={item}
                        onChange={() => setTheme(item)}
                        defaultChecked={theme === item}
                      />
                      <label
                        htmlFor={item}
                        className={`${
                          item === theme
                            ? "text-bg font-extrabold text-xl"
                            : "text-text/80 font-medium text-lg "
                        } capitalize`}
                      >
                        {item}
                        <div className="rounded-lg overflow-hidden mt-3">
                          <Image
                            src={"/" + item + ".jpg"}
                            width={240}
                            height={240}
                            className=" "
                            alt={`${item} Preview`}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="divider" />
          </div>

          <button className="mx-12 bg-primary mt-auto text-bg font-medium text-3xl py-2 rounded-md">
            Generate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Generate;
