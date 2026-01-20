import Link from "next/link";

import sampleData from '@/src/sampleData';

export default async function InterceptedPage( {params}: { params: Promise<{ sample: string }> }) {

    const { sample } = await params;
    const sampleItem = sampleData.find( (el) => el.filename === sample );

    return (
        <>
            <dialog className="fixed top-[15%] left-1/7 w-3/4 h-3/4 bg-gray-300 p-8 rounded border-none shadow-lg z-[9999]" open>
                <h1 className="text-lg sm:text-xl mb-5">{sampleItem?.title}</h1>
                <div className="overflow-y-auto pr-4 h-[70%] sm:h-3/4">
                    <p className="text-left whitespace-pre-line">
                        {sampleItem?.about}
                    </p>
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