import { useEffect, useState } from "react";

export function useStickyMenu() {
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const isPastHidePoint = currentScrollY > 200;

      if (currentScrollY <= 0) {
        setIsMenuHidden(false);
      } else if (isScrollingDown && isPastHidePoint) {
        setIsMenuHidden(true);
      } else if (!isScrollingDown) {
        setIsMenuHidden(false);
      }

      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isMenuHidden;
}