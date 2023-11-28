import mongoClientPromise from "./mongodb";

interface user {
  id: string
  email: string
  password: string
  name: string
}

export default async function addUser(data: user) {
  try {
    const client = await mongoClientPromise
    const db = client.db("cs260");

    const users = await db
      .collection("users")
      .find({ email: data.email })
      .toArray();

    if (users.length === 0) {
      const insertRes = await db.collection("users").insertOne({
        email: data.email,
        password: data.password,
        name: data.name
      });
      console.log(insertRes);
      return {
        email: data.email,
        name: data.name,
      }
    } else {
      console.log("Username: %s already exists", data.email);
      return Response.json({ message: "Username '" + data.email + "' already exists" }, { status: 401 });
    }
  } catch (e) {
    console.log(e);
    return null;
  }
}