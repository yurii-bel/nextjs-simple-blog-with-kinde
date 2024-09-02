import { Suspense } from "react";
import PostsList from "../../components/posts-list";

export default async function Page() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">All posts</h1>

      <Suspense fallback="Loading...">
        <PostsList />
      </Suspense>
    </main>
  );
}
