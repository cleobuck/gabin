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

export function getScrollbarWidth() {
  // Create a temporary element
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // Trigger scrollbar
  outer.style.width = "100px"; // Set a width to calculate scrollbar size
  outer.style.height = "100px"; // Set a height to calculate scrollbar size
  document.body.appendChild(outer);

  // Create an inner element
  const inner = document.createElement("div");
  inner.style.width = "100%";
  inner.style.height = "100%";
  outer.appendChild(inner);

  // Calculate the scrollbar width
  const scrollbarWidth = outer.offsetWidth - inner.clientWidth;

  // Remove the temporary elements
  outer.parentNode!.removeChild(outer);

  return scrollbarWidth;
}
