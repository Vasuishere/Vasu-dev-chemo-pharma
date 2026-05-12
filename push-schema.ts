import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());
import { getPayload } from "payload";

async function run() {
  process.env.PAYLOAD_PUSH = "true";
  const config = (await import("./src/payload.config")).default;
  await getPayload({ config });
  console.log("Payload initialized and schema pushed!");
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});