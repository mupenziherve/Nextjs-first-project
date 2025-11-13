import './globals.css';
import { Navbar } from '@/components/Navbar';
import type { Metadata } from 'next';
import {  Inter} from 'next'use client'

import { useState } from "react";

const Counter = () => {
     
   const [count,setCount] = useState(0);
  return <div className="flex flex-col items-center w-[100px]">
  <p className="text-5xl font-bold">{count}</p>
  <button onClick={() => setCount(count + 1)} className="bg-blue-900 rounded
  text-white px-4 py-2 mt-4">Increase</button>
  </div>

};

export default Counter;
'use client'

import { useState } from "react";

const Counter = () => {
     
   const [count,setCount] = useState(0);
  return <div className="flex flex-col items-center w-[100px]">
  <p className="text-5xl font-bold">{count}</p>
  <button onClick={() => setCount(count + 1)} className="bg-blue-900 rounded
  text-white px-4 py-2 mt-4">Increase</button>
  </div>

};

export default Counter;
/font/google';

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
          <Navbar />
          <main className="max-w-3xl mx-auto py-10">{children}</main>
        </body>
      </html>
    );

}


