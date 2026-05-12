
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

async function testRaw() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URI,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log("Connecting with raw pg...");
    const client = await pool.connect();
    console.log("Connected!");
    const res = await client.query("SELECT id, email FROM public.users");
    console.log("Users:", res.rows);
    client.release();
    process.exit(0);
  } catch (err) {
    console.error("Raw pg error:", err);
    process.exit(1);
  }
}

testRaw();
