import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="mb-4 text-4xl">About us</h1>
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
