import { getPayload } from "payload";
import config from "./src/payload.config";

async function test() {
  try {
    const payload = await getPayload({ config });
    const data = await payload.findGlobal({ slug: "company-info" });
    console.log("Success:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

test();
