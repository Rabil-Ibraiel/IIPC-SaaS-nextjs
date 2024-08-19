"use client";

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const Faq = () => {
  const questions = [
    {
      quesition: "How does the invoice PDF generation work?",
      answer:
        "Simply enter your invoice details, such as client information and itemized services or products. Our platform will automatically generate a professional, formatted PDF for you to download and send.",
    },
    {
      quesition: "Can I customize the invoice template?",
      answer:
        "There is alredy more than one design for the Invoice, you can always contact us to provide the theme you want.",
    },
    {
      quesition: "How many invoices can I generate per month?",
      answer:
        "Depending on your subscription plan, you can generate anywhere from a limited number to unlimited invoices each month.",
    },
    {
      quesition: "Do you offer customer support?",
      answer:
        "Yes, our customer support team is available 24/7 to assist you with any questions or issues you may have.",
    },
  ];

  const [open, setOpen] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
  });

  return (
    <div
      id="FAQ"
      className="section bg-gradient-to-b from-[#5D2CA8] to-bg overflow-x-hidden flex items-center justify-center"
    >
      <div className="container">
        <h2 className="title mb-32">Frequently asked questions</h2>
        <div className="flex flex-col gap-20">
          {questions.map((item, index) => (
            <div key={item.quesition}>
              <div
                className="flex items-center justify-between cursor-default select-none"
                onClick={() =>
                  setOpen({
                    ...open,
                    [`q${index + 1}`]: !open[`q${index + 1}`],
                  })
                }
              >
                <h3 className="text-3xl lg:text-5xl font-medium mb-3">
                  {item.quesition}
                </h3>
                <span>
                  <FiPlus
                    name=""
                    className={`text-4xl ${
                      open[`q${index + 1}`] ? "-rotate-45" : "rotate-0"
                    } transition-all`}
                  />
                </span>
              </div>
              {open[`q${index + 1}`] && (
                <p className="text-text/70 text-lg xl:text-2xl mt-4 mb-3">
                  {item.answer}
                </p>
              )}
              <div className="border border-white/40 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
