
import { getPayload } from "payload";
import config from "./src/payload.config";
import fs from "fs";
import path from "path";

// Manually parse .env
const envFile = fs.readFileSync(".env", "utf8");
envFile.split("\n").forEach(line => {
  const [key, ...valueParts] = line.split("=");
  if (key && valueParts.length > 0) {
    const value = valueParts.join("=").trim().replace(/^"|"$/g, "");
    process.env[key.trim()] = value;
  }
});

console.log("Manually parsed .env. DATABASE_URI starts with:", process.env.DATABASE_URI?.substring(0, 20));

async function createAdmin() {
  try {
    console.log("Initializing Payload...");
    const payload = await getPayload({ config });
    console.log("Payload initialized.");

    const email = "vasudevchemopharma@gmail.com";
    const password = "password123";

    console.log(`Checking for users...`);
    // Use a raw drizzle query if possible to see if it works
    const result = await payload.db.drizzle.execute("SELECT 1");
    console.log("Raw query result:", result);

    const existingUsers = await payload.find({
      collection: "users",
      limit: 1,
      overrideAccess: true,
    });

    console.log("Found users docs:", existingUsers.docs.length);

    process.exit(0);
  } catch (err) {
    console.error("Error creating admin:", err);
    process.exit(1);
  }
}

createAdmin();
