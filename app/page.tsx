import Link from "next/link";


function Homepage() {
  return (
    <div>const url = 'https://www.course-api.com/react-tours-project';

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
      <h1 className="text-7xl">Home Page</h1>
      
      <Link href="/about" className="text-xl text-blue-500 inline-block mt-8">
      about page
      
      </Link>

    </div>
  );
}
export default Homepage;

