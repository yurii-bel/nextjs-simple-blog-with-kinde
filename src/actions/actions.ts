"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  // auth check
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  // validation check (e.g. zod)

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  console.log(title, body);

  // insert into database
  await prisma.post.create({
    data: {
      title,
      body,
    },
  });
  // revalidate
  revalidatePath("/posts");
}
