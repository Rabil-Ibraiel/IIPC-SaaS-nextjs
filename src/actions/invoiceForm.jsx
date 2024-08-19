"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createInvoicePdf(formData) {
  const companyName = formData.get("companyName");
  const InvoiceName = formData.get("InvoiceName");
  const date = formData.get("date");
  const dueDate = formData.get("dueDate");
  const clientName = formData.get("clientName");
  const clientAddress = formData.get("clientAddress");
  const footerMain = formData.get("footerMain");
  const footerBody = formData.get("footerBody");
  const itemsLength = formData.get("itemsLength");
  const theme = formData.get("theme");
  let items = [];
  let total = 0;
  for (let i = 0; i < itemsLength; i++) {
    const itemName = formData.get(`itemName-${i}`);
    const itemQuantity = formData.get(`itemQuantity-${i}`);
    const itemPrice = formData.get(`itemPrice-${i}`);
    total += Number(itemPrice) * Number(itemQuantity);
    items.push({ itemName, itemQuantity, itemPrice });
  }

  const item = {
    companyName,
    InvoiceName,
    date,
    dueDate,
    clientName,
    clientAddress,
    items,
    footerMain,
    footerBody,
    total,
    theme,
  };

  cookies().set("item", JSON.stringify(item));
  return redirect("/pdf");
}
