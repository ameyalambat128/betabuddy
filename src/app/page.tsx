import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>

        <h1 className="">Beta Buddy is Coming Soon!</h1>
      </div>
    </main>
  );
}
