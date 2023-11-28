import mongoClientPromise from "./mongodb";

interface service {

}

export default async function addService(email: string, service: service) {
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
        { $push: { services: service } }
      );
      console.log(updateRes);
      return service;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
}