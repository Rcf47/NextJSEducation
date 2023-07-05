import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  return response.json();
}
export const metadata: Metadata = {
  title: "Blog Page",
};
export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <h2 className="mb-4 text-2xl">Lil blog here</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
