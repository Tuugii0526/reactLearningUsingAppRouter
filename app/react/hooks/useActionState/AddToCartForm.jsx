"use client";
import { addCartAction } from "@/lib/actions";
import { SubmitButton } from "./SubmitButton";

export const AddToCartForm = () => {
  return (
    <form action={addCartAction}>
      <input
        type="text"
        placeholder="name"
        className="ring-1 rounded-sm p-2"
        name="name"
      />
      <SubmitButton />
    </form>
  );
};
