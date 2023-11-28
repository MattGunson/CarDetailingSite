import addService from "@/lib/db/addService";
import getServices from "@/lib/db/getServices";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const param = req.nextUrl.searchParams.get('user');
  if (param === null) {
    return Response.json({ message: "missing required query param 'user'" }, { status: 403 })
  }
  const data = await req.json();

  if (data?.date === undefined) {
    return Response.json({ message: "invalid registration" }, { status: 401 });
  }

  await addService(param, {})

  return Response.json({ message: "success"})
}

export async function GET(req: NextRequest) {
  const param = req.nextUrl.searchParams.get('user');
  if (param === null) {
    return Response.json({ message: "missing required query param 'user'" }, { status: 403 })
  }

  const services = await getServices(param);
  if (services === null) {
    return Response.json({ message: "error getting car data for user" }, { status: 500 })
  } else {
    return Response.json(services)
  }
}