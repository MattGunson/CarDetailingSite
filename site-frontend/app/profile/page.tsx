import Link from "next/link";

interface card {
  description: string;
}

const cards: card[] = [
  { description: "Hello User!" },
  { description: "My cars window" },
  { description: "My services" },
  { description: "My information" }
];

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-wrap">
        {cards.map((card) => (
          <div key={card.description} className="m-4 bg-slate-200 h-[25vh] w-[50vh]">
            {card.description}
          </div>
        ))}
        <div className="m-4 bg-slate-300 h-[25vh] w-[50vh]">
          <h1>Upcoming services</h1>
          <Link
            className="btn btn-ghost normal-case text-xl"
            href="/profile/service"
          >
            service details
          </Link>
        </div>
      </div>
    </main>
  );
}
