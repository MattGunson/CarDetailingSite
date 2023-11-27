import mongoClientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  if (data?.username === undefined || data?.password === undefined || data?.name === undefined) {
    return Response.json({message: "invalid registration"}, { status: 401 });
  }

  try {
    const client = await mongoClientPromise
    const db = client.db("cs260");

    const users = await db
      .collection("users")
      .find({ username: data.username })
      .toArray();

    if (users.length === 0) {
      const insertRes = await db.collection("users").insertOne({
        username: data.username,
        password: data.password,
        name: data.name
      });
      console.log(insertRes);
      return Response.json({
        username: data.username,
        name: data.name,
      });
    } else {
      console.log("Username: %s already exists", data.username);
      return Response.json({ message: "Username '" + data.username + "' already exists" }, { status: 401 });
    }
  } catch (e) {
    console.error(e);
    return Response.json({ message: "error registering user" }, { status: 403 });
  }
}