"use client";

import { useTransition,useState} from "react";
import { addTopic } from "@/lib/actions";
export default function Page() {
  const [isPending, startTransition] = useTransition();
  const [topic,setTopic]=useState('')
  const[upTopic,setUpTopic]=useState('')
  const submitAction = async (formData) => {
    startTransition(async () => {
      const topic = formData.get("topicName").trim();
      const upTopic = formData.get("upTopicName").trim();
      
      if(!topic || !upTopic)
      {
        alert('Topic and UpTopic should not be empty.')
        return
      }
      await addTopic(topic,upTopic)
      setTopic('')
      setUpTopic('')
    });
  };
  return (
    <form action={submitAction} className="flex flex-col items-center gap-y-2">
      <label htmlFor="topicName">
        Topic name:
        <input
          className="ring-1 rounded-lg p-1"
          id="topicName"
          name="topicName"
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e)=>{
           setTopic(e.target.value)
          }}
          disabled={isPending}
        />
      </label>
      <label htmlFor="upTopicName">
        Up topic name:
        <input
          className="ring-1 rounded-lg p-1"
          id="upTopicName"
          name="upTopicName"
          type="text"
          placeholder="Up topic"
          value={upTopic}
          onChange={(e)=>{
            setUpTopic(e.target.value)
          }}
          disabled={isPending}
        />
      </label>
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}
