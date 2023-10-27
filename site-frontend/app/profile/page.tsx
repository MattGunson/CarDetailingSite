import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { redirect } from "next/navigation";

interface card {
  description: string;
  content: kvPair[];
}

interface kvPair {
  key: string;
  val: string;
}

let cards: card[] = [
  { description: "My Cars", content: [] },
];

export default async function Profile() {
  const session = await getServerSession(options)

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  let user = session.user
  let cars = null // TODO: add query for cars
  let services = null // TODO: add query for services

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-wrap">
        <div className="m-4 bg-slate-200 h-[25vh] w-[50vh]">
          {user ? <>
            {"My Profile"}
            <div className="ml-4">{"name: " + user.name}</div>
            <div className="ml-4">{"email: " + user.email}</div>
            <div className="ml-4">{"image: " + user.image}</div>
          </> : <></>}
        </div>

        {cards.map((card) => (
          <div key={card.description} className="m-4 bg-slate-200 h-[25vh] w-[50vh]">
            {card.description}
            {card.content.map((content) => (
              <div key={content.key} className="ml-4">
                {content.key + ": " + content.val}
              </div>
            ))
            }
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
