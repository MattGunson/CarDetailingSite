import mongoClientPromise from "./mongodb";

interface services{
  date: string
}

export default async function getServices(email: string) {
  try {
    const client = await mongoClientPromise
    const db = client.db("cs260");

    const users = await db
      .collection("users")
      .find({ email: email }, { projection: { services: 1, _id: 0 } })
      .toArray();

    if (users.length != 1) {
      return null;
    }
    const user = users[0]
     if (user?.services === undefined) {
      const noServices: services[] = []
      return noServices;
     } else {
      const serviceArray: services[] = user.services.map((obj: any) => obj as services);
      console.log(serviceArray);
      return serviceArray;
     }
  } catch (e) {
    console.error(e);
    return null;
  }
}