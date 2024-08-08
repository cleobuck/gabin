import React from "react";
import styling from "./Banner.module.scss";
type Props = { style: string };

// https://codepen.io/studiojvla/pen/qVbQqW

export default function Banner({ style }: Props) {
  const data = ["Mariages, ", "Entreprises, ", "Collectivités, ", "Planner, "];
  return (
    <div className={` ${styling[style]} ${styling.borders}`}>
      <div className={styling.slider}>
        <div className={styling.slideTrack}>
          {data.map((item) => (
            <>
              <span className={styling.slide}>{item.toUpperCase()}</span>{" "}
            </>
          ))}
          {data.map((item) => (
            <>
              <span className={styling.slide}>{item.toUpperCase()}</span>
            </>
          ))}
          {/* {data.map((item) => (
            <>
              <span className={styling.slide}>{item.toUpperCase()}</span>
            </>
          ))}
          {data.map((item) => (
            <>
              <span className={styling.slide}>{item.toUpperCase()}</span>
            </>
          ))} */}
        </div>
      </div>
    </div>
  );
}
