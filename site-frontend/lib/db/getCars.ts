import mongoClientPromise from "./mongodb"

interface car {
  name: string,
  make: string,
  model: string,
  class: string,
  year: number,
  color: string,
}

interface user {
  id: string
  email: string
  password: string
  name: string
}

export default async function getCars(email: string) {
  try {
    const client = await mongoClientPromise
    const db = client.db("cs260");

    const users = await db
      .collection("users")
      .find({ email: email }, { projection: { cars: 1, _id: 0 } })
      .toArray();

    if (users.length != 1) {
      return null;
    }
    const user = users[0]
     if (user?.cars === undefined) {
      const noCars: car[] = []
      return noCars;
     } else {
      const carArray: car[] = user.cars.map((obj: any) => obj as car);
      console.log(carArray);
      return carArray;
     }
  } catch (e) {
    console.error(e);
    return null;
  }
}