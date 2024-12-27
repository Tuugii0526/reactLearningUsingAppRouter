"use server";

import { revalidatePath } from "next/cache";
import { neon } from "@neondatabase/serverless";
import { resolve } from "styled-jsx/css";
const sql = neon(process.env.DATABASE_URL);
export async function fetchLinks() {
  const links = await sql`
   WITH RECURSIVE rec AS (
SELECT id ,topic,up_topic_id
FROM links
WHERE id =1
UNION 
SELECT l.id,l.topic,l.up_topic_id
FROM links l
INNER JOIN rec r ON r.id=l.up_topic_id
)
SELECT * FROM rec;`;
  return links;
}
export async function addTopic(topic, upTopic) {
  try {
    const upTopicLink = await sql`
    SELECT id,topic,up_topic_id FROM links
    WHERE topic=${upTopic} ;
    `;
    if (!upTopicLink) {
      return { error: "Topic is not created" };
    }
    const insertedTopic = await sql`
    INSERT INTO links(topic,up_topic_id)
    VALUES(${topic},${upTopicLink[0].id})
    RETURNING * `;
    if (!insertedTopic) {
      return { error: "topic is not created" };
    }
  } catch (error) {
    return { error: "topic is not created" };
  }
  revalidatePath("/");
}

export async function addCartAction(prevState, formData) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  promise.then((res) => {
    console.log("res:", res);
  });
}
