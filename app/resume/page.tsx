import Link from "next/link";
import Image from "next/image";
import samples from "@/src/sampleData";

export default function Resume() {
  return (
    <div className="text-center pt-20 pb-15 px-10 bg-gray-100">
      <h1 className="font-bold text-2xl sm:text-3xl p-3">Portfolio Samples</h1>
      <h2 className="text-lg sm:text-xl">Andrea Dao</h2>
      <p>Content Engineer, Technical Communicator</p>
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
                href={`/samples/${sample.url}`}
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
  );
}
