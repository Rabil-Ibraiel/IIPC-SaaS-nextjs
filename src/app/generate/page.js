import Generate from "@/components/Generate";
import { cookies } from "next/headers";

const Page = () => {
  let item = {};

  if (cookies().has("item")) {
    try {
      item = JSON.parse(cookies().get("item")?.value);
    } catch (err) {
      item = {};
    }
  } else {
    item = {};
  }

  async function cookieDelete() {
    "use server";
    cookies().delete("item");
  }
  return <Generate item={item} cookieDelete={cookieDelete} />;
};

export default Page;
