import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col lg:h-screen items-center px-4 md:px-0">
      <div className="py-10 w-full md:w-[70%]">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
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
            This is the guide on how to take photos for Beta Buddy. Make sure
            the photos are just of the wall and there are no obstructions or
            objects in them besides the wall. Make sure you use a camera with
            good picture quality.
          </p>
        </div>

        {/* Step 1 */}
        <div className="mt-8">
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black w-10 h-8 md:w-10 md:h-10">
              1
            </div>
            <h3 className="ml-4 text-lg md:text-xl font-semibold">
              Step 1: Take a Photo of the Routes and/or Holds that you want
              analyzed.
            </h3>
          </div>
          <p className="mt-4">
            We need a dataset of 20 photos to support future improvements to our
            product. By capturing the climbing wall from various angles and
            lighting conditions, we can enhance the algorithm&apos;s ability to
            generalize and identify holds more effectively. While this
            won&apos;t directly impact the current model, it will help refine
            and expand the system in future versions.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-4">
            <div className="row-start-1 md:row-start-1 bg-black text-white px-2 py-1 rounded-md text-center font-bold text-xs md:text-sm">
              We only need 20 pictures of the wall.
            </div>
            <div className="row-start-3 md:row-start-1 bg-black text-white px-2 py-1 rounded-md text-center font-bold text-xs md:text-sm">
              Ensure that none of the holds are cut off or blurry.
            </div>
            <div className="row-start-5 md:row-start-1 bg-black text-white px-2 py-1 rounded-md text-center font-bold text-xs md:text-sm">
              Have photos that have the top to bottom in one shot
            </div>

            {/* Images */}
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
                src="/images/top-to-bottom.png"
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
            <div className="flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black w-8 h-8 md:w-10 md:h-10">
              2
            </div>
            <h3 className="ml-4 text-lg md:text-xl font-semibold">
              Step 2: Post data via website
            </h3>
          </div>
          <p className="mt-4">
            From &quot;Post the problem&quot;, fill in the gym information in
            the email for the data you shot. Fill in the date that you shot the
            hold as well. That way our database can filter using the latest
            photos.
          </p>
          <p className="mt-2">
            When it&apos;s published, we will be running an Artificial
            Intelligence Algorithm over the image to detect the holds and the
            grades of the routes.
          </p>
          <div className="mt-4 space-x-2">
            <a
              href="mailto:alambat@asu.edu"
              target="_blank"
              className="inline-block px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md text-center"
            >
              Post the problem
            </a>
            <Link
              className="inline-block px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md text-center"
              href="/uploadImages"
            >
              Post Images
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
