import {cookies} from 'next/headers';
import {createHash,randomBytes} from 'node:crypto';
import {db} from './db';
export const hash=(s:string)=>createHash('sha256').update(s).digest('hex');
export const token=()=>randomBytes(32).toString('base64url');
export async function currentUser(){const session=(await cookies()).get('jahiza_session')?.value;if(!session)return null;const {rows}=await db().query('SELECT u.id,u.email FROM sessions s JOIN users u ON u.id=s.user_id JOIN entitlements e ON e.user_id=u.id WHERE s.token_hash=$1 AND s.expires_at>now() AND e.active=true',[hash(session)]);return rows[0] as {id:string,email:string}|undefined ?? null;}
export async function setSession(userId:string){const value=token();await db().query("INSERT INTO sessions(user_id,token_hash,expires_at) VALUES($1,$2,now()+interval '30 days')",[userId,hash(value)]);(await cookies()).set('jahiza_session',value,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:2592000});}
export const deny=()=>Response.json({error:'غير مصرح بالدخول'},{status:401,headers:{'Cache-Control':'no-store'}});
