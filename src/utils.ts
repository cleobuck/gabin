"use client";
import { useEffect, useState } from "react";

export const createClassNameString = (
  builder: {
    condition: boolean;
    name: string;
  }[],
  check = false
) => {
  const string = builder
    .filter((item) => item.condition)
    .map((item) => item.name)
    .join(" ");
  if (check) console.log(builder);
  return string;
};

export const isItAPhone = () => {
  const [isPhone, setPhone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPhone(
        window.innerWidth < 768 ||
          (window.innerHeight < 768 && window.innerWidth >= 768)
      );
    }
  }, []);

  return isPhone;
};
