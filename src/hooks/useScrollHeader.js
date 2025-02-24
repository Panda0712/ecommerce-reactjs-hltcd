import { useEffect, useRef, useState } from "react";

const useScrollHeader = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const previousScrollPosition = useRef(0);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;

    if (
      currentPosition > previousScrollPosition.current &&
      currentPosition >= 150
    ) {
      setIsScroll(true);
    } else if (
      currentPosition < previousScrollPosition.current &&
      currentPosition <= 0
    ) {
      setIsScroll(false);
    }

    previousScrollPosition.current = currentPosition <= 0 ? 0 : currentPosition;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScroll, previousScrollPosition, scrollPosition };
};

export default useScrollHeader;
