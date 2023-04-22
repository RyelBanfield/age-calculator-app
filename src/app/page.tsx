"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

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
  const [birthdayDay, setDay] = useState<string | null>(null);
  const [birthdayMonth, setMonth] = useState<string | null>(null);
  const [birthdayYear, setYear] = useState<string | null>(null);

  const [errors, setErrors] = useState<string[]>([]);

  const [yearsSince, setYearsSince] = useState<number | string>("--");
  const [monthsSince, setMonthsSince] = useState<number | string>("--");
  const [daysSince, setDaysSince] = useState<number | string>("--");

  const handleAgeCalculation = () => {
    setErrors([]);

    const resetDisplay = () => {
      setYearsSince("--");
      setMonthsSince("--");
      setDaysSince("--");
    };

    if (!birthdayDay || !birthdayMonth || !birthdayYear) {
      setErrors(["Please enter a valid birthdate"]);
      resetDisplay();
      return;
    }

    const birthdate = new Date(
      Number(birthdayYear),
      Number(birthdayMonth) - 1,
      Number(birthdayDay)
    );

    if (
      isNaN(birthdate.getTime()) ||
      birthdate.getFullYear() !== Number(birthdayYear) ||
      birthdate.getMonth() !== Number(birthdayMonth) - 1 ||
      birthdate.getDate() !== Number(birthdayDay)
    ) {
      setErrors(["Please enter a valid birthdate"]);
      resetDisplay();
      return;
    }

    const ageInMilliseconds = new Date().getTime() - birthdate.getTime();
    const ageInYears = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365.25;

    const years = Math.floor(ageInYears);
    const months = Math.floor((ageInYears - years) * 12);
    const days = Math.floor((ageInYears - years - months / 12) * 365.25);

    setYearsSince(years);
    setMonthsSince(months);
    setDaysSince(days);
  };

  return (
    <main className="flex h-screen items-center justify-center bg-neutral-OffWhite">
      <div className="flex h-[500px] w-[345px] flex-col justify-evenly rounded-t-[25px] rounded-bl-[25px] rounded-br-[125px] bg-neutral-White p-6 md:w-[500px]">
        {/* Inputs */}
        <div className="mb-6 flex gap-6">
          <div className="flex flex-col">
            <label
              className={`${poppins700.className} uppercase tracking-widest text-neutral-SmokeyGrey`}
            >
              Day
            </label>
            <input
              type="text"
              placeholder="DD"
              onChange={(e) => setDay(e.target.value)}
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
              placeholder="MM"
              onChange={(e) => setMonth(e.target.value)}
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
              placeholder="YYYY"
              onChange={(e) => setYear(e.target.value)}
              className="w-full rounded border-neutral-LightGrey font-bold"
            />
          </div>
        </div>

        {/* Empty Div */}
        {errors.length === 0 && <div className="mb-6" />}

        {/* Errors */}
        {errors.length > 0 && (
          <div className=" flex flex-col">
            {errors.map((error) => (
              <p
                key={error}
                className={`text-sm text-primary-LightRed ${poppins400i.className}`}
              >
                {error}
              </p>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="relative mb-12 w-full">
          <div className="my-6 h-0.5 w-full bg-neutral-LightGrey" />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              handleAgeCalculation();
            }}
            className="absolute left-0 right-0 top-[-8px] m-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-Purple transition hover:bg-neutral-OffBlack md:left-auto"
          >
            <Image src="/icon-arrow.svg" alt="Arrow" width={30} height={30} />
          </motion.button>
        </div>

        {/* Age */}
        <div className="">
          <p className={`text-6xl leading-tight ${poppins800i.className}`}>
            <span className="text-primary-Purple">{yearsSince}</span> years
          </p>
          <p className={`text-6xl leading-tight ${poppins800i.className}`}>
            <span className="text-primary-Purple">{monthsSince}</span> months
          </p>
          <p className={`text-6xl leading-tight ${poppins800i.className}`}>
            <span className="text-primary-Purple">{daysSince}</span> days
          </p>
        </div>
      </div>
    </main>
  );
}
