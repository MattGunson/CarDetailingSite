import Link from "next/link";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <div>My cars window (displays information about your vehicles)</div>
        <div>My services</div>
        <div>My information</div>
        <div>Upcoming services</div>
        <Link
          className="btn btn-ghost normal-case text-xl"
          href="/profile/service"
        >
          service details
        </Link>
      </div>
    </main>
  );
}
