import Dropzone from "@/components/Dropzone";

export default function Page() {
  return (
    <div className="flex flex-col lg:h-screen items-center px-4 md:px-0">
      <div className="py-10 w-full md:w-[70%]">
        <h1 className="text-3xl font-bold">Upload Files</h1>
        <Dropzone className="p-16 mt-10 border border-neutral-400" />
      </div>
    </div>
  );
}
