"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone, DropzoneOptions, FileRejection } from "react-dropzone";
interface DropzoneProps {
  className?: string; // Optional prop
}
interface RejectedFileWithPreview extends FileRejection {
  file: File; // Overriding the file property to ensure it exists
}
const Dropzone: React.FC<DropzoneProps> = ({ className }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [rejected, setRejected] = useState<RejectedFileWithPreview[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (acceptedFiles.length) {
        setFiles((previousFiles) => [
          ...previousFiles,
          ...acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          ),
        ]);
      }

      if (fileRejections.length) {
        setRejected((previousFiles) => [
          ...previousFiles,
          ...(fileRejections as RejectedFileWithPreview[]),
        ]);
      }
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
    onDrop,
  } as DropzoneOptions);

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (name: string) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeAll = () => {
    setFiles([]);
    setRejected([]);
  };

  const removeRejected = (name: string) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!files.length) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));
    // Note: Adjust the upload_preset and URL according to your backend or cloud storage solution

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_URL!, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Dropzone */}
      <div
        {...getRootProps({
          className: `${className} flex flex-col items-center justify-center border-dashed rounded-lg cursor-pointer hover:border-neutral-800`,
        })}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-4">
          {isDragActive ? (
            <p className="text-neutral-600">Drop the files here ...</p>
          ) : (
            <p className="text-neutral-600">
              Drag & drop files here, or click to select files
            </p>
          )}
          <button
            type="button"
            className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md text-center"
          >
            Select files
          </button>
        </div>
      </div>

      {/* Preview */}
      <section className="mt-10">
        <div className="flex gap-4">
          <h2 className="title text-3xl font-semibold">Preview</h2>
          <button
            type="button"
            onClick={removeAll}
            className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md text-center"
          >
            Remove all files
          </button>
        </div>

        {/* Accepted files */}
        <h3 className="text-lg font-semibold mt-10 border-b pb-3">
          Accepted Files
        </h3>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
          {files.map((file) => (
            <li key={file.name} className="relative">
              <Image
                src={file.preview}
                alt={file.name}
                width={100}
                height={100}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
                className="h-full w-full object-contain rounded-md"
              />
              <button
                type="button"
                className="w-6 h-6 rounded-full flex justify-center items-center absolute -top-3 -right-3 bg-black text-white"
                onClick={() => removeFile(file.name)}
              >
                <X className="w-4 h-4 fill-white hover:fill-secondary-400 transition-colors" />
              </button>
              <p className="mt-2 text-neutral-500 text-[12px] font-medium">
                {file.name}
              </p>
            </li>
          ))}
        </ul>

        {/* Rejected Files */}
        <h3 className="title text-lg font-semibold mt-24 border-b pb-3">
          Rejected Files
        </h3>
        <ul className="mt-6 flex flex-col">
          {rejected.map(({ file, errors }) => (
            <li key={file.name} className="flex items-start justify-between">
              <div>
                <p className="mt-2 text-neutral-500 text-sm font-medium">
                  {file.name}
                </p>
                <ul className="text-[12px] text-red-400">
                  {errors.map((error) => (
                    <li key={error.code}>{error.message}</li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="mt-1 py-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors"
                onClick={() => removeRejected(file.name)}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </form>
  );
};

export default Dropzone;
