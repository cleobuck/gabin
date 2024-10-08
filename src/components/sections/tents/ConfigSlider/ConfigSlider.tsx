import React, { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./ConfigSlider.module.scss";
import ListSlider from "@/components/sections/list-slider/ListSlider";

type Props = { type: string };

const ConfigSlider: React.FC<Props> = ({ type }) => {
  const ref = useRef<HTMLDivElement[]>([]);

  const [positions, setPositions] = useState<number[]>([]);

  useEffect(() => {
    if (ref.current) {
      const elementPositions = ref.current.map((element) => {
        return (
          element.getBoundingClientRect().left -
          element.parentElement!.getBoundingClientRect().left
        );
      });
      setPositions(elementPositions); // To check positions
    }

    // This will log the ref after the component has mounted
  }, [ref.current.length]);

  const configData = [
    {
      dimensions: [10, 10],
      list: [
        "Cérémonie : 160 personnes",
        "Cocktail : 120 personnes",
        "Walking dinner : 100 personnes",
        "Diner assis : 60 personnes",
      ],
    },

    {
      dimensions: [6, 12],
      list: [
        "Cérémonie : 115 personnes",
        "Cocktail : 85 personnes",
        "Walking dinner : 70 personnes",
        "Diner assis : 45 personnes",
      ],
    },
    {
      dimensions: [6, 9],
      list: [
        "Cérémonie : 85 personnes",
        "Cocktail : 60 personnes",
        "Walking dinner : 50 personnes",
        "Diner assis : 35 personnes",
      ],
    },
    {
      dimensions: [5, 5],
      list: [
        "Cérémonie : 40 personnes",
        "Cocktail : 30 personnes",
        "Walking dinner : 25 personnes",
        "Diner assis : 15 personnes",
      ],
    },
  ];
  return (
    <div className={styles.listSliderContainer}>
      <ListSlider style="tent" positions={positions}>
        {configData.map((elem: any, index: number) => (
          <TentConfig
            key={index}
            elem={elem}
            type={type}
            ref={(el) => {
              if (el) ref.current[index] = el;
            }}
          />
        ))}
        {configData.map((elem: any, index: number) => (
          <TentConfig
            key={index}
            elem={elem}
            type={type}
            ref={(el) => {
              if (el && index == 0) ref.current[configData.length] = el;
            }}
          />
        ))}
      </ListSlider>
    </div>
  );
};

export default ConfigSlider;

type ConfigProps = {
  elem: { dimensions: number[]; list: string[] };
  type: string;
};

const TentConfig = forwardRef<HTMLDivElement, ConfigProps>(
  ({ elem, type }, ref) => {
    return (
      <div className={styles.container} ref={ref}>
        <h4>
          Configurations possibles avec une tente {type} {elem.dimensions[0]} x{" "}
          {elem.dimensions[1]} m ({elem.dimensions[0] * elem.dimensions[1]}m²){" "}
        </h4>

        <ul>
          {elem.list.map((elem, index) => (
            <li key={index}> {elem} </li>
          ))}
        </ul>
      </div>
    );
  }
);

TentConfig.displayName = "tentConfig";
