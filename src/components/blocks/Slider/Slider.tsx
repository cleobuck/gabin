"use client";
import React, { useState, useRef, useEffect, ReactNode } from "react";
import styling from "./Slider.module.scss";
import Image, { StaticImageData } from "next/image";

type ImageData = { image: StaticImageData; alt: string };

const DraggableSlider = ({
  elements,
  type = "image",
  style,
}: {
  elements: (ReactNode | ImageData)[];
  type?: string;
  style: string;
}) => {
  const [position, setPosition] = useState<number>(0);
  const sliderBarRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [sliderBarInfo, setSliderBarInfo] = useState<DOMRect | null>(null);

  useEffect(() => {
    const updateSliderBarInfo = () => {
      if (sliderBarRef.current) {
        setSliderBarInfo(sliderBarRef.current.getBoundingClientRect());
      }
    };

    updateSliderBarInfo();
    window.addEventListener("resize", updateSliderBarInfo);

    return () => {
      window.removeEventListener("resize", updateSliderBarInfo);
      removeEventListeners();
    };
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current || !sliderBarInfo) return;

    const x = e.clientX - sliderBarInfo.left;
    const newPosition = Math.max(0, Math.min(x, sliderBarInfo.width));
    setPosition(newPosition);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDraggingRef.current || !sliderBarInfo) return;

    const touch = e.touches[0];
    const x = touch.clientX - sliderBarInfo.left;
    const newPosition = Math.max(0, Math.min(x, sliderBarInfo.width));
    setPosition(newPosition);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    removeEventListeners();
  };

  const handleMouseDown = () => {
    isDraggingRef.current = true;
    addEventListeners();
  };

  const getTransformValue = (): string => {
    if (!sliderBarInfo || !imageContainerRef.current) return `translateX(0)`;

    const percentage = position / sliderBarInfo.width;
    const maxTranslation =
      imageContainerRef.current.scrollWidth - window.innerWidth * 0.9;
    const translation = percentage * maxTranslation;

    return `translateX(-${translation}px)`;
  };

  return (
    <div className={styling.sliderContainer}>
      <div
        className={styling.imageFixedContainer}
        ref={imageContainerRef}
        style={{ transform: getTransformValue() }}
      >
        {elements!.map((element, index) =>
          type === "image" ? (
            <figure key={index} className={styling.image}>
              <Image
                alt={(element as ImageData)!.alt}
                className={styling.image}
                src={(element as ImageData)!.image}
                layout="fixed"
                width={276}
                height={250}
              />
            </figure>
          ) : (
            <div key={index} className={styling.customElement}>
              {element as ReactNode}
            </div>
          )
        )}
      </div>
      <div className={`${styling.sliderBarContainer} ${styling[style]}`}>
        <div
          className={`${styling.sliderBar}`}
          ref={sliderBarRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div
            className={styling.sliderDot}
            style={{
              left: sliderBarInfo
                ? `${(position / sliderBarInfo.width) * 100}%`
                : `0px`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DraggableSlider;
