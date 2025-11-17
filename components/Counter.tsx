'use client'

import { useState } from "react";
const url = 'https://www.course-api.com/react-tours-project'

type Tour = {
  id: string
  name: string
  info: string
  image: string
  price: string
}

async function ToursPage() {
  const response = await fetch(url)
  const data: Tour[] = await response.json()
  console.log(data)
  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>

      {data.map((tour) => {
        return <h2 key={tour.id}>{tour.name}</h2>
      })}
    </section>
  )
}
export default ToursPageconst url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

async function ToursPage() {
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  console.log(data);
  return (
    <section>
      <h1 className='text-3xl mb-4'>Tours</h1>

      {data.map((tour) => {
        return <h2 key={tour.id}>{tour.name}</h2>;
      })}
    </section>
  );
}
export default ToursPage;
const Counter = () => {
     
   const [count,setCount] = useState(0);
  return <div className="flex flex-col items-center w-[100px]">
  <p className="text-5xl font-bold">{count}</p>
  <button onClick={() => setCount(count + 1)} className="bg-blue-900 rounded
  text-white px-4 py-2 mt-4">Increase</button>
  </div>

};

export default Counter;
 