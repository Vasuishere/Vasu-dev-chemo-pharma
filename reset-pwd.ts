
import pg from 'pg';
import dotenv from 'dotenv';
import crypto from 'crypto';

// Since I might not have bcrypt easily available, I'll try to use a simple one 
// or check if I can use Payload's internal one.
// Actually, I'll just use raw pg to set it to something I know.

dotenv.config();

const { Pool } = pg;

async function resetPassword() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URI,
    ssl: { rejectUnauthorized: false }
  });

  try {
    const email = "vasudevchemopharma@gmail.com";
    const password = "password123";
    
    // We'll use a pre-calculated bcrypt hash for "password123" with 10 rounds.
    // Hash: $2b$10$6jB7.mRjQ.mKz.Z6k.Z6k.Z6k.Z6k.Z6k.Z6k.Z6k.Z6k.Z6k.Z6k.Z
    // Wait, I should generate a real one. 
    // I'll try to use the 'crypto' module if Payload uses it, but Payload uses bcrypt.
    
    console.log("Connecting...");
    const client = await pool.connect();
    
    // Let's try to find the current hash to see what it looks like
    const current = await client.query("SELECT hash FROM public.users WHERE email = $1", [email]);
    console.log("Current hash:", current.rows[0]?.hash);
    
    // I'll use a known bcrypt hash for "password123"
    // Generated via online tool or local node:
    // $2b$10$r9GZ.G0Y8G8Z8Z8Z8Z8Z8uY.I.I.I.I.I.I.I.I.I.I.I.I.I.I.I
    // Actually, I'll just use a real bcrypt library if I can.
    
    client.release();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

resetPassword();
