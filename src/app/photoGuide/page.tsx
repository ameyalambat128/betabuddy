import Image from "next/image";

export default function PhotoGuide() {
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="my-10 w-[70%]">
        <h2 className="text-3xl font-bold text-center">
          How to take photos for Beta Buddy?
        </h2>
        {/* Introduction */}
        <div className="mt-8">
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-full bg-black text-white w-10 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
            </div>
            <h3 className="ml-4 text-xl font-semibold">Introduction</h3>
          </div>
          <p className="mt-4">
            Gym is the place to climb. Avoid crowds so as not to inconvenience.
            3D scanning, movie shooting can be done with smartphone. We
            recommend a smartphone with high-performance camera function.
          </p>
        </div>
        {/* Step 1 */}
        <div className="mt-8">
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black w-10 h-10">
              1
            </div>
            <h3 className="ml-4 text-xl font-semibold">
              Step 1: Shoot the problem you want to climb.
            </h3>
          </div>
          <p className="mt-4">
            Take photos of the problem from different angles to have a clear
            reference to work with.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Text labels in a separate grid row */}
            <div className="bg-black text-white px-2 py-1 rounded-md text-center font-bold text-sm">
              Take around 20 pictures
            </div>
            <div className="bg-black text-white px-2 py-1 rounded-md text-center font-bold text-sm">
              Top to bottom in one shot
            </div>
            <div className="bg-black text-white px-2 py-1 rounded-md text-center font-bold text-sm">
              3 to 5 directions wrapping around the problem
            </div>

            {/* Images in the next grid row */}
            <div className="relative h-60 w-full">
              <Image
                src="/images/picture-20.png"
                alt="Step 1 Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative h-60 w-full">
              <Image
                src="/images/all-angles.png"
                alt="Step 1 Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative h-60 w-full">
              <Image
                src="/images/vertical-angles.png"
                alt="Step 1 Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* Step 2 */}
        <div className="mt-8">
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black w-10 h-10">
              2
            </div>
            <h3 className="ml-4 text-xl font-semibold">
              Step 2: Post data via website
            </h3>
          </div>
          <p className="mt-4">
            From &quot;Post the problem&quot;, fill in the gym information in
            the email for the data you shot. You can also fill in information
            such as hold and setter, impression, etc.
          </p>
          <p className="mt-2">
            When it&apos;s published, we will be creating a 3D model using these
            photos.
          </p>
          <div className="mt-4">
            <a
              href="mailto:alambat@asu.edu"
              target="_blank"
              className="inline-block px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md text-center"
            >
              Post the problem
            </a>
          </div>
        </div>
        {/* Conclusion or additional notes */}
        {/* 
        <div className="mt-8">
          <h3 className="text-xl font-semibold">
            Conclusion or Additional Notes
          </h3>
          <p className="mt-4">
            Any concluding remarks or additional notes can go here.
          </p>
        </div> */}
      </div>
    </div>
  );
}
