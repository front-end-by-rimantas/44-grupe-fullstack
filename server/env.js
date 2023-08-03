import dotenv from 'dotenv';

const env = dotenv.config();

const DB_PASS = env.parsed.DB_PASS;
const DB_USER = env.parsed.DB_USER;
const SERVER_PORT = env.parsed.SERVER_PORT;
const TITLE = env.parsed.TITLE;

export { DB_PASS, DB_USER, SERVER_PORT, TITLE };