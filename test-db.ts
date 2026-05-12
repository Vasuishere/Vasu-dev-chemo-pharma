
import dotenv from "dotenv";
dotenv.config();

const databaseUri = process.env.DATABASE_URI;

if (!databaseUri) {
  throw new Error("DATABASE_URI is required to test the database connection.");
}

const uri = databaseUri.replace(":6543/", ":5432/").replace("?pgbouncer=true", "");
process.env.DATABASE_URI = uri;
console.log("Overridden DATABASE_URI for testing (port 5432)");

import { getPayload } from "payload";
import config from "./src/payload.config";

async function testDB() {
  try {
    console.log("Attempting to connect to database...");
    const payload = await getPayload({ config });
    console.log("Successfully connected to database");
    const users = await payload.find({ collection: "users" });
    console.log(`Found ${users.totalDocs} users`);
    process.exit(0);
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
}

testDB();
