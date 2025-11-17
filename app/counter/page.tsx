import Counter from "@/components/Counter";

const CounterPage = () => {
  return (
    <section>
      <h1 className="text-6xl mb-16">Page Content</h1>
      <Counter/const url = 'https://www.course-api.com/react-tours-project';

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
export default ToursPage;>
    </section>
  )
};
export default CounterPage;
