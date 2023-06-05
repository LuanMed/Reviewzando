import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Link className="" href="/signin">
        Sign In
      </Link>
      <Link href="/signup">Sign Up</Link>
    </div>
  );
}
