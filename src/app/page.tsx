import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <main className="flex min-h-screen flex-col items-center justify-center">
        <section className="">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-10 text-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Now Available!
                </div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Beta Buddy - The Ultimate Rock Climbing Guide
                </h1>
              </div>
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mb-10"
                  >
                    Get access to the best climbing problems
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/images/sample.JPG"
                      height="2000"
                      width="1000"
                      className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="/uploadImages"
                      target="__blank"
                      className="px-4 py-2 rounded-xl font-bold dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <div className="flex space-x-2">
                      <Link
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 py-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="/photoGuide"
                      >
                        Photo Guide
                      </Link>
                      <Link
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 py-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="/errorGuide"
                      >
                        Error Guide
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </section>
      </main>
    </BackgroundLines>
  );
}
