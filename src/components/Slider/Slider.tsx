"use client";
import React, { useState, useRef, useEffect } from "react";
import styling from "./Slider.module.scss";

const DraggableSlider = ({ images }) => {
  const [position, setPosition] = useState(0);
  const sliderBarRef = useRef(null);
  const isDraggingRef = useRef(false);

  const imageContainerRef = useRef(null);

  const [sliderBarInfo, setSliderBarInfo] = useState(null);

  useEffect(() => {
    if (sliderBarRef.current) {
      setSliderBarInfo(sliderBarRef.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !sliderBarInfo) return;

    const x = e.clientX - sliderBarInfo.left;
    const newPosition = Math.max(0, Math.min(x, sliderBarInfo.width));
    setPosition(newPosition);
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || !sliderBarInfo) return;

    const touch = e.touches[0];
    const x = touch.clientX - sliderBarInfo.left;
    const newPosition = Math.max(0, Math.min(x, sliderBarInfo.width));
    setPosition(newPosition);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleMouseUp);
  };

  const handleMouseDown = () => {
    isDraggingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleMouseUp);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  const getTransformValue = () => {
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
        {images.map((image, index) => (
          <figure key={index} className={styling.image}>
            <img src={image} alt={`Image ${index + 1}`} />
          </figure>
        ))}
      </div>
      <div className={styling.sliderBarContainer}>
        <div
          className={styling.sliderBar}
          ref={sliderBarRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div
            className={styling.sliderDot}
            style={{
              left: sliderBarInfo
                ? `${
                    position / sliderBarInfo.width > 0.9
                      ? ((position - 11) / sliderBarInfo.width) * 100
                      : (position / sliderBarInfo.width) * 100
                  }%`
                : `0px`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DraggableSlider;
