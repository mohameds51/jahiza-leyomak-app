import { Pool } from 'pg';
const globalPool=globalThis as typeof globalThis & {__jahizaPool?:Pool};
export function db(){if(!process.env.DATABASE_URL)throw new Error('DATABASE_URL is not configured');return globalPool.__jahizaPool??=new Pool({connectionString:process.env.DATABASE_URL,ssl:{rejectUnauthorized:true},max:3});}
