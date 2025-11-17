import './globals.css';
import { Navbar } from '@/components/Navbar';
import type { Metadata } from 'next';
import {  Inter} from 'next/font/google';

const inter = Inter({ subsets: ['latin' ] });


export const metadata: Metadata = {
title:'Next.js Project',
description: 'A Next.js project with TypeScript and TailwindCSS',
keywords: 'Next.js, TypeScript, TailwindCSS ',
};



export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <Navbar />const url = 'https://www.course-api.com/react-tours-project';

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
          <main className="max-w-3xl mx-auto py-10">{children}</main>
        </body>
      </html>
    );

}


