"use client";

import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Compare } from "@/components/ui/compare";

export default function Page() {
  return (
    <main className="flex flex-col lg:h-screen items-center px-4 md:px-0">
      <div className="h-screen py-20 w-full">
        <div className="flex justify-center">
          <h1 className="font-bold text-lg">Here are your climbing routes!</h1>
        </div>
        <div className="mt-10 flex justify-center">
          <Compare
            firstImage="/images/betabuddy-1-old.jpg"
            secondImage="/images/betabuddy-1.jpg"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
            slideMode="hover"
          />
        </div>
        <LayoutGrid cards={cards} />
      </div>
    </main>
  );
}

const SkeletonOne = () => {
  return <div></div>;
};

const SkeletonTwo = () => {
  return <div></div>;
};
const SkeletonThree = () => {
  return <div></div>;
};
const SkeletonFour = () => {
  return <div></div>;
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/betabuddy-1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/betabuddy-2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/betabuddy-3.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/betabuddy-4.jpg",
  },
];
