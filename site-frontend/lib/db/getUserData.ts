export interface carResponse {
  err: string | null;
  cars: car[]
}

export interface car {
  name: string,
  make: string,
  model: string,
  class: string,
  year: number,
  color: string,
}

export default async function getUserData(userId: string) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      err: null,
      cars: [
        {
          name: "Audrey's Car",
          make: "toyota",
          model: "rav4",
          class: "crossover suv",
          year: 2023,
          color: "blue",
        }
      ],
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }); // TODO: add query to database for cars
  const carData: carResponse = await res.json();
  return carData;
}
