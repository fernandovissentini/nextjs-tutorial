import Link from "next/link";

export default function Home() {
  return <>
    <h1>Next.js pre-rendering</h1>
    <p>
      <Link href={`/users`}>
        <a>Users</a>
      </Link>
    </p>
    <p>
      <Link href={`/posts`}>
        <a>Posts</a>
      </Link>
    </p>
    <p>
      <Link href={`/products`}>
        <a>Products</a>
      </Link>
    </p>
  </>
}
