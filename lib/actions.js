'use server'

import { neon } from "@neondatabase/serverless" 
const sql=neon(process.env.DATABASE_URL)
export async function fetchLinks(){
   const links=await sql`
   WITH RECURSIVE rec AS (
SELECT id ,topic,up_topic_id
FROM links
WHERE id =1
UNION 
SELECT l.id,l.topic,l.up_topic_id
FROM links l
INNER JOIN rec r ON r.id=l.up_topic_id
)
SELECT * FROM rec;`
   console.log('links:',links)
   return links 
}
export async function getData() {
    const sql = neon(process.env.DATABASE_URL);
    const response = await sql`SELECT version()`;
    return response[0].version;
  }