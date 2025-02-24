/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

const useTranslate = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [translateX, setTranslateX] = useState(80);

  const previousScrollPosition = useRef(0);

  const scrollTracking = () => {
    const currentPosition = window.pageYOffset;

    if (currentPosition > previousScrollPosition.current) {
      setScrollDirection("down");
    } else if (currentPosition < previousScrollPosition.current) {
      setScrollDirection("up");
    }

    previousScrollPosition.current = currentPosition <= 0 ? 0 : currentPosition;
    setScrollPosition(currentPosition);
  };

  const handleScrollX = () => {
    if (scrollDirection == "down" && scrollPosition >= 1700) {
      setTranslateX(translateX <= 0 ? 0 : translateX - 1);
    } else if (scrollDirection == "up" && scrollPosition <= 1700) {
      setTranslateX(translateX >= 80 ? 80 : translateX + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);

    return () => window.removeEventListener("scroll", scrollTracking);
  }, []);

  useEffect(() => {
    handleScrollX();
  }, [scrollPosition]);

  return {
    translateX,
  };
};

export default useTranslate;
