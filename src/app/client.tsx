"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  type MotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const fontSize = 42;
const padding = 5;
const height = fontSize + padding;

export function GeneralCounter({
  number,
  delay,
}: {
  number: number;
  delay: number;
}) {
  const [ones, setOnes] = useState(0);
  const [tens, setTens] = useState(0);
  const [hundreds, setHundreds] = useState(0);
  const [thousands, setThousands] = useState(0);
  const [tenThousands, setTenThousands] = useState(0);
  const [hundredThousands, setHundredThousands] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOnes(Math.floor(number) % 10 || 10);
      setTens(Math.floor(number / 10) % 10 || 10);
      setHundreds(Math.floor(number / 100) % 10 || 10);
      setThousands(Math.floor(number / 1000) % 10 || 10);
      setTenThousands(Math.floor(number / 10000) % 10 || 10);
      setHundredThousands(Math.floor(number / 100000) % 10 || 10);
    }, delay);
  }, [delay, number]);

  return (
    <div
      className="gap-.5 flex items-center overflow-hidden text-xl leading-none sm:text-3xl"
      suppressHydrationWarning
    >
      {Math.floor(number / 100000) % 10 != 0 && (
        <Digit value={hundredThousands} />
      )}
      {Math.floor(number / 10000) % 10 != 0 && <Digit value={tenThousands} />}
      <Digit value={thousands} />
      ,
      <Digit value={hundreds} />
      <Digit value={tens} />
      <Digit value={ones} />+
    </div>
  );
}

export function GPACounter({ gpa, delay }: { gpa: number; delay: number }) {
  const [ones, setOnes] = useState(0);
  const [tenths, setTenths] = useState(0);
  const [hundredths, setHundredths] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOnes(Math.floor(gpa) % 10 || 10);
      setTenths(Math.floor(gpa * 10) % 10 || 10);
      setHundredths(Math.floor(gpa * 100) % 10 || 10);
    }, delay);
  }, [delay, gpa]);

  return (
    <div
      className="gap-.5 flex items-center overflow-hidden text-xl leading-none sm:text-3xl"
      suppressHydrationWarning
    >
      <Digit value={ones} />
      .
      <Digit value={tenths} />
      <Digit value={hundredths} />
    </div>
  );
}

export function Digit({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const animatedValue = useSpring(value, {
    stiffness: 300,
    damping: 50,
    mass: 0.5,
  });

  useEffect(() => {
    animatedValue.set(value);
  }, [animatedValue, value]);

  return (
    <div
      style={{ height }}
      className={cn("relative w-[1ch] tabular-nums", className)}
    >
      {[...Array(10).keys()].map((i) => (
        <MovingNumber key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function MovingNumber({ mv, number }: { mv: MotionValue; number: number }) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{
        y,
        position: "absolute",
        inset: "0",
        display: "flex",
        placeItems: "center",
        justifyContent: "center",
      }}
    >
      {number}
    </motion.span>
  );
}
