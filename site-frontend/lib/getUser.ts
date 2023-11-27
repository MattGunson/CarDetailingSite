import mongoClientPromise from "./mongodb";

interface user {
  id: string
  email: string
  password: string
  name: string
}

export default async function getUser(username: string) {
  try {
    const client = await mongoClientPromise
    const db = client.db("cs260");
  
    const users = await db
      .collection("users")
      .find({username: username})
      .toArray();
  
    if (users.length === 0) {
      return null;
    }
  
    const user = users[0];
    const res: user = {id: "" + user._id, email: "" + user.username, password: "" + user.password, name: "" + user.name};
    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
    return null;
  }  
}
