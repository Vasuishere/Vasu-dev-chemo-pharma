import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import path from "path";
import { fileURLToPath } from "url";

import { Products } from "@/collections/Products";
import { Users } from "@/collections/Users";
import { Blogs } from "@/collections/Blogs";

import { CompanyInfo } from "@/globals/CompanyInfo";
import { ProductSequencing } from "@/globals/ProductSequencing";
import { SiteImages } from "@/globals/SiteImages";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
// Push schema by default outside of production, unless explicitly disabled.
const shouldPushSchema = process.env.PAYLOAD_PUSH 
  ? process.env.PAYLOAD_PUSH === "true" 
  : process.env.NODE_ENV !== "production";

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Users, Products, Blogs],
  globals: [CompanyInfo, ProductSequencing, SiteImages],
  secret: process.env.PAYLOAD_SECRET!,
  email: ({ payload }) => ({
    name: "console",
    defaultFromAddress: process.env.PAYLOAD_FROM_EMAIL || "noreply@vasudevchemopharma.com",
    defaultFromName: process.env.PAYLOAD_FROM_NAME || "Vasudev Chemo Pharma",
    async sendEmail(message) {
      const recipients = Array.isArray(message.to)
        ? message.to.join(", ")
        : message.to || "unknown recipient";

      payload.logger.info({
        msg: `Email logged by configured console adapter. To: '${recipients}', Subject: '${message.subject || ""}'`,
      });
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
      max: (() => {
        const val = parseInt(process.env.DATABASE_POOL_SIZE || "3", 10);
        return (!isNaN(val) && val >= 1) ? Math.min(val, 50) : 3;
      })(),
      ssl: { rejectUnauthorized: false },
    },
    push: shouldPushSchema,
  }),
  sharp,
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
});
