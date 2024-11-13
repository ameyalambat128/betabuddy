"use client";
import Dropzone from "@/components/Dropzone";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for programmatic navigation

export default function Page() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loadingStates = [
    { text: "Uploading Images to our Database" },
    { text: "Indexing the Images" },
    { text: "Running our Fine-Tuned Machine Learning Model" },
    { text: "Isolating Prominent Blobs for Detailed Analysis" },
    { text: "Enhancing Feature Detection through Preprocessing" },
    { text: "Detecting Area-Filtered Contours" },
    { text: "Simplifying Contours to Enhance Segmentation Efficiency" },
    { text: "Classifying and Segmenting Identified Holds" },
  ];

  // Duration for each step (in milliseconds) times the number of steps
  const totalDuration = loadingStates.length * 2000;

  // Effect to navigate after loader completion
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false); // Reset loading state
        router.push("/results"); // Navigate to /results
      }, totalDuration);

      return () => clearTimeout(timer); // Cleanup timer on component unmount or loading state change
    }
  }, [loading, totalDuration, router]);

  const handleUploadClick = () => {
    setLoading(true); // Start the loader
  };

  return (
    <main className="flex flex-col lg:h-screen items-center px-4 md:px-0">
      <div className="py-10 w-full md:w-[70%]">
        {/* Multi-step loader */}
        <Loader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
        />

        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Upload Files</h1>
          <div>
            <button
              onClick={handleUploadClick}
              disabled={loading}
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              {loading ? "Loading..." : "Upload Images"}
            </button>
          </div>
        </div>

        <Dropzone className="p-16 mt-10 border border-neutral-400" />
      </div>
    </main>
  );
}
