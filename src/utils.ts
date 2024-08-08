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

export const IsItAPhone = () => {
  const [isPhone, setPhone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPhone(window.screen.width < 768);
    }
  }, [typeof window]);
  return isPhone;
};

export const IsItADesktop = () => {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDesktop(window.screen.width >= 1024);
    }
  }, []);
  return isDesktop;
};
