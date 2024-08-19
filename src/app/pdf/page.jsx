import InvoiceDocument from "@/components/InvoiceDocument";
import InvoiceDoucmentContainer from "@/components/InvoiceDoucmentContainer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  let item = {};
  if (cookies().has("item")) {
    try {
      item = await JSON.parse(cookies().get("item").value);
    } catch (err) {
      return redirect("/generate");
    }
  } else {
    return redirect("/generate");
  }

  return (
    <div className="mt-20">
      <InvoiceDoucmentContainer item={item} />
    </div>
  );
};

export default Page;
