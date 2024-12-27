import { AddToCartForm } from "./AddToCartForm";

export const metadata = {
  title: "useActionState ",
};
export default function Page() {
  return (
    <div className="flex flex-col w-full h-full ">
      <p className="text-center">Welcome to useActionState</p>
      <AddToCartForm />
    </div>
  );
}
