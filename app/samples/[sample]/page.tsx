import Link from "next/link";
import Image from "next/image";
import samples from "@/src/sampleData";

export default async function PDFPage({
  params,
}: {
  params: Promise<{ sample: string }>;
}) {
  const { sample } = await params;
  const sampleItem = samples.find((el) => el.filename === sample);

  return (
    <>
      <div className="text-center pt-20 pb-15 px-10 bg-gray-100">
        <h1 className="font-bold text-2xl sm:text-3xl p-3">
          Portfolio Samples
        </h1>
        <h2 className="text-lg sm:text-xl">Andrea Dao</h2>
        <p>Developer Content Creator, Documentation Technical Writer</p>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-x-[3%] ">
          {samples.map((sample, i) => (
            <div
              key={i}
              className="mt-15 bg-white rounded-lg shadow-lg flex flex-col justify-between"
            >
              <p>{sample.type}</p>
              <Image
                className="w-full h-auto"
                src="/pencil.jpg"
                alt="sample image"
                width={300}
                height={200}
              />
              <div className="p-3">
                <h3 className="pb-2 text-lg sm:text-xl text-gray-900">
                  {sample.title}
                </h3>
                <p className="text-gray-500">{sample.description}</p>
              </div>
              <div className="flex gap-4 justify-center bg-amber-100 rounded-b-lg">
                <Link
                  href={`/samples/${sample.filename}`}
                  scroll={false}
                  className="text-blue-400"
                >
                  Learn more
                </Link>
                <Link
                  href={`${sample.sampleURL}`}
                  scroll={false}
                  className="text-blue-400"
                >
                  View sample
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
      <dialog
        className="fixed top-[15%] left-1/7 w-3/4 h-3/4 bg-gray-300 p-8 rounded border-none shadow-lg z-[9999]"
        open
      >
        <h1 className="text-lg sm:text-xl mb-5">{sampleItem?.title}</h1>
        <div className="overflow-y-auto pr-4 h-[70%] sm:h-3/4">
          <p className="text-left whitespace-pre-line">{sampleItem?.about}</p>
        </div>
        <Link
          href="/resume"
          scroll={false}
          className="fixed right-[20%] top-[82%] sm:top-[80%] sm:right-[15%] z-[10000] py-3 font-medium text-blue-800"
        >
          Close
        </Link>
      </dialog>
    </>
  );
}
