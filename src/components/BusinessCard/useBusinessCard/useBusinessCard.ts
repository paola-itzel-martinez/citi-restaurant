import { useEffect, useRef, useState } from "react";
import { GoToBusiness, UseBusinessCard } from "./useBusinessCard.types";
import { useScreen } from "../../../hooks";

export const useBusinessCard: UseBusinessCard = ({
  total,
  index,
  url,
  fetchData
}) => {
  const { isMobile } = useScreen();
  const [isLoaded, setIsLoaded] = useState(false);
  const addRef = (total - 7) === index;
  const newRef = useRef(null);
  const ref = addRef ? newRef : null;

  const goToBusiness: GoToBusiness = (event) => {
    event.preventDefault();
    event.stopPropagation();

    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([element]) => {
        if (element.isIntersecting && !isLoaded) {
          fetchData();
          setIsLoaded(true);
        }
      },
      { threshold: 1 }
    );

    if (ref?.current && isMobile) observer.observe(ref.current);

    return () => {
      if (ref?.current) observer.unobserve(ref.current);
    };
  }, [ref, fetchData, isLoaded, isMobile]);

  return {
    ref,
    goToBusiness
  }
};
