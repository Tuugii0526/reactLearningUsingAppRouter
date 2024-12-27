"use client"

import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const status=useFormStatus()
  return <button>{status?.pending ? 'Loading' : 'Submit'}</button>;
};
