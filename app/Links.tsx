import Link from "next/link";

export function Links() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/deep">Deep</Link>
      </li>
    </ul>
  );
}
