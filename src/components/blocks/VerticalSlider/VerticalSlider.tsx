import React, {
  ReactNode,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./VerticalSlider.module.scss";

type Props = { elements: ReactNode[] };

const VerticalSlider: React.FC<Props> = ({ elements }) => {
  const sliderBarRef = useRef<HTMLDivElement>(null);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const draggableListRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    console.log(e);

    console.log(sliderBarRef.current?.getBoundingClientRect());
  };

  const handleMove = (position: number) => {
    document.body.style.overflow = "hidden";

    const sliderBarRect = sliderBarRef.current?.getBoundingClientRect();

    const y = position - sliderBarRect!.top;

    let percentage = (y / sliderBarRect!.height) * 100;

    setScrollPercentage(
      percentage < 0 ? 0 : percentage > 100 ? 100 : percentage
    );
  };

  useEffect(() => {
    if (draggableListRef.current)
      draggableListRef.current.scrollTop =
        (scrollPercentage / 100) *
        (draggableListRef.current.scrollHeight -
          draggableListRef.current?.clientHeight);
  }, [scrollPercentage]);

  return (
    <div className={styles.container}>
      <div className={`${styles.sliderBarContainer}`}>
        <div
          className={`${styles.sliderBar}`}
          onMouseMove={(e: MouseEvent) => {
            const position = e.clientY;
            handleMove(position);
          }}
          onTouchMove={(e: TouchEvent) => {
            const position = e.touches[0].clientY;
            handleMove(position);
          }}
          onTouchEnd={() => (document.body.style.overflow = "auto")}
          onMouseLeave={() => (document.body.style.overflow = "auto")}
          ref={sliderBarRef}
        >
          <div
            className={styles.sliderDot}
            style={{
              top: `${scrollPercentage}%`,
            }}
          />
        </div>
      </div>
      <div
        className={styles.draggableList}
        onScroll={(e: SyntheticEvent<HTMLDivElement>) => {
          setScrollPercentage(
            (e.currentTarget.scrollTop /
              (e.currentTarget.scrollHeight - e.currentTarget.clientHeight)) *
              100
          );
        }}
        ref={draggableListRef}
      >
        <div className={styles.oversize}>{elements}</div>
      </div>
    </div>
  );
};

export default VerticalSlider;
