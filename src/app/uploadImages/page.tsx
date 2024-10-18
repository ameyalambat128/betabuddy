import Dropzone from "@/components/Dropzone";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col lg:h-screen items-center px-4 md:px-0">
      <div className="py-10 w-full md:w-[70%]">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Upload Files</h1>
          <div className="">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/results"
            >
              Upload Images
            </Link>
          </div>
        </div>

        <Dropzone className="p-16 mt-10 border border-neutral-400" />
      </div>
    </main>
  );
}
