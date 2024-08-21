import React, {
  ReactNode,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
} from "react";
import styles from "./VerticalSlider.module.scss";
import { getScrollbarWidth } from "@/utils";

type Props = { elements: ReactNode[] };

const VerticalSlider: React.FC<Props> = ({ elements }) => {
  const sliderBarRef = useRef<HTMLDivElement>(null);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const draggableListRef = useRef<HTMLDivElement>(null);

  const handleMove = (position: number) => {
    document.body.style.overflow = "hidden";

    console.log(getScrollbarWidth());

    document.body.style.paddingRight = `${getScrollbarWidth()}px`;

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
          onMouseMove={(e: ReactMouseEvent<HTMLDivElement>) => {
            const position = e.clientY;
            handleMove(position);
          }}
          onTouchMove={(e: ReactTouchEvent) => {
            const position = e.touches[0].clientY;
            handleMove(position);
          }}
          onTouchEnd={() => {
            document.body.style.overflowY = "auto";
            document.body.style.paddingRight = "0";
          }}
          onMouseLeave={() => {
            document.body.style.overflowY = "auto";
            document.body.style.paddingRight = "0";
          }}
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
