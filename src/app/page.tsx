import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins400i = Poppins({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});
const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins800i = Poppins({
  weight: "800",
  style: "italic",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-neutral-OffWhite">
      <div className="flex h-[500px] w-[345px] flex-col items-center justify-evenly rounded-t-[25px] rounded-bl-[25px] rounded-br-[125px] bg-neutral-White p-6">
        {/* Inputs */}
        <div className="mb-12 flex gap-6">
          <div className="flex flex-col">
            <label
              className={`${poppins700.className} uppercase tracking-widest text-neutral-SmokeyGrey`}
            >
              Day
            </label>
            <input
              type="text"
              className="w-full rounded border-neutral-LightGrey font-bold"
            />
          </div>

          <div className="flex flex-col">
            <label
              className={`${poppins700.className} uppercase tracking-widest text-neutral-SmokeyGrey`}
            >
              Month
            </label>
            <input
              type="text"
              className="w-full rounded border-neutral-LightGrey font-bold"
            />
          </div>

          <div className="flex flex-col">
            <label
              className={`${poppins700.className} uppercase tracking-widest text-neutral-SmokeyGrey`}
            >
              Year
            </label>
            <input
              type="text"
              className="w-full rounded border-neutral-LightGrey font-bold"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-12 w-full">
          <div className="my-6 h-0.5 w-full bg-neutral-LightGrey" />
          <div className="absolute left-0 right-0 top-[-8px] m-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-Purple">
            <Image src="/icon-arrow.svg" alt="Arrow" width={30} height={30} />
          </div>
        </div>

        {/* Age */}
        <div>
          <p className={`text-5xl leading-tight ${poppins800i.className}`}>
            <span className="text-primary-Purple">38</span> years
          </p>
          <p className={`text-5xl leading-tight ${poppins800i.className}`}>
            <span className="text-primary-Purple">3</span> months
          </p>
          <p className={`text-5xl leading-tight ${poppins800i.className}`}>
            <span className="text-primary-Purple">26</span> days
          </p>
        </div>
      </div>
    </main>
  );
}
