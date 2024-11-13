import React from "react";

const errors = [
  {
    title: "No file uploaded",
    description:
      "It appears that no file was selected for upload. Please select a file and try again.",
  },
  {
    title: "Invalid file type",
    description:
      "The file format is not supported. Please upload a file in a supported format, such as JPEG, PNG, or PDF.",
  },
  {
    title: "Invalid file size",
    description:
      "The file size exceeds the maximum limit. Please upload a smaller file or compress it before trying again.",
  },
  {
    title: "Could not read image",
    description:
      "There was an issue reading the uploaded image. This might be due to file corruption or an unsupported format.",
  },
  {
    title: "Network timeout",
    description:
      "The upload took too long and timed out. Check your internet connection and try again.",
  },
  {
    title: "Unknown error",
    description:
      "An unexpected error occurred. Please refresh the page and try again or contact support for assistance.",
  },
];

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        Error Guide
      </h1>

      <div className="mb-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Below is a list of potential errors. Please find your error code and
          follow the suggestions to resolve the issue.
        </p>
      </div>

      <div className="w-full max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Potential Issues:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {errors.map((error, index) => (
            <div
              key={index}
              className="bg-gray-900 dark:bg-gray-600 p-6 rounded-lg shadow-lg transition-colors hover:bg-gray-700 dark:hover:bg-gray-600"
            >
              <h3 className="text-lg font-bold text-white">{`Error ${
                index + 1
              }`}</h3>
              <p className="text-gray-300 mt-2">{error.title}</p>
              <p className="text-gray-400 text-sm mt-1">{error.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-sm text-gray-500 dark:text-gray-400">
        Please contact support if the issue persists.
      </div>
    </div>
  );
}
