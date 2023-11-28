import mongoClientPromise from "./mongodb";

interface car {
  name: string,
  make: string,
  model: string,
  class: string,
  year: number,
  color: string,
}
export default async function addCar(email: string, car: car) {
  try {
    const client = await mongoClientPromise
    const db = client.db("cs260");

    const users = await db
      .collection("users")
      .find({ email: email })
      .toArray();

    if (users.length === 0) {
      console.log("Username: %s does not exist", email);
      return null;

    } else {
      const updateRes = await db.collection("users").updateOne(
        { email: email },
        { $push: { cars: car } }
      );
      console.log(updateRes);
      return car;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
}