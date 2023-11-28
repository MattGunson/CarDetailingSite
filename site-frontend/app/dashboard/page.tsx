import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { redirect } from "next/navigation";
import getUserData from "../../lib/db/getUserData";
import { carResponse } from "../../lib/db/getUserData";

export default async function Profile() {
  const session = await getServerSession(options)

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  const user = session.user
  const carData: carResponse = await getUserData("audrey");
  

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
        {carData.err ?
          <div className="m-4 bg-red-300 h-[25vh] w-[50vh]">
            <h1 className="text-red-800">ERROR: {carData.err}</h1>
          </div>
          :
          <div className="m-4 bg-slate-200 h-[25vh] w-[50vh]">
            {carData.cars.map((car) => (
              <div key={car.name}>
                {car.name}
                <div className="ml-4">{"make: " + car.make}</div>
                <div className="ml-4">{"model: " + car.model}</div>
                <div className="ml-4">{"class: " + car.class}</div>
                <div className="ml-4">{"year: " + car.year}</div>
                <div className="ml-4">{"color: " + car.color}</div>
              </div>
            ))}
          </div>
        }
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
