import {cookies} from 'next/headers';
import {db} from '../../../../lib/server/db';
import {hash} from '../../../../lib/server/auth';
export const runtime='nodejs';
export async function POST(){const c=await cookies();const v=c.get('jahiza_session')?.value;if(v)await db().query('DELETE FROM sessions WHERE token_hash=$1',[hash(v)]);c.delete('jahiza_session');return Response.json({ok:true})}
