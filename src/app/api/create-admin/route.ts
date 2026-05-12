import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const token = request.headers.get("x-admin-setup-token");
  if (!token || token !== process.env.ADMIN_SETUP_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await getPayload({ config });

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    return NextResponse.json({ error: "Missing admin credentials in env" }, { status: 500 });
  }

  console.log("Create-admin API called from protected post.");

  try {
    console.log("Attempting payload.find users...");
    const existingUsers = await payload.find({
      collection: "users",
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (existingUsers.docs.length > 0) {
      // Update existing user's password
      await payload.update({
        collection: "users",
        id: existingUsers.docs[0].id,
        data: {
          password: password,
          role: "admin",
        },
      });
      return NextResponse.json({ message: "Admin user updated successfully" });
    } else {
      // Create new admin user
      await payload.create({
        collection: "users",
        data: {
          email: email,
          password: password,
          role: "admin",
        },
      });
      return NextResponse.json({ message: "Admin user created successfully" });
    }
  } catch (error: unknown) {
    console.error("Failed to create/update admin user:", error);
    return NextResponse.json({ error: "Internal server error occurred while processing admin setup." }, { status: 500 });
  }
}
