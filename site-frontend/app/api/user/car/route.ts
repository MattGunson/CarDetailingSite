import addCar from "@/lib/db/addCar";
import getCars from "@/lib/db/getCars";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const param = req.nextUrl.searchParams.get('user');
  if (param === null) {
    return Response.json({ message: "missing required query param 'user'" }, { status: 403 })
  }
  const data = await req.json();

  if (data?.make === undefined
    || data?.model === undefined
    || data?.name === undefined
    || data?.year === undefined
    || data?.class === undefined
    || data?.color === undefined
  ) {
    return Response.json({ message: "invalid registration" }, { status: 401 });
  }

  await addCar(param, { name: data.name, make: data.make, model: data.model, class: data.class, year: data.year, color: data.color })

  return Response.json({ message: "success" }, { status: 200 });
}

export async function GET(req: NextRequest) {
  const param = req.nextUrl.searchParams.get('user');
  if (param === null) {
    return Response.json({ message: "missing required query param 'user'" }, { status: 403 })
  }

  const cars = await getCars(param);
  if (cars === null) {
    return Response.json({ message: "error getting car data for user" }, { status: 500 })
  } else {
    return Response.json(cars)
  }
}