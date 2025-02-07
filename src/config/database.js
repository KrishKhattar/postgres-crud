import pg from "pg";

const { Client } = pg;

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log(`Connected to Postgres`);
  } catch (err) {
    console.log(`Postgres Error: ${err}`);
  }
};

export { client };
export default connectDB;
