import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className=" text-4xl font-bold mb-5 md:text-5xl">Create Post</h1>

      <Form />
      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
