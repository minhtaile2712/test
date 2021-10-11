import { useState, useEffect } from "react";

function useMediaQuery(mediaQuery) {
  const [matched, setMatched] = useState(null);

  useEffect(() => {
    console.log("re run media query:", mediaQuery);
    const mediaQueryList = window.matchMedia(mediaQuery);
    setMatched(mediaQuery.matches);

    function handleMediaChange() {
      setMatched(mediaQueryList.matches);
      console.log(mediaQuery, "has changed");
    }
    console.log("re add event listener");

    mediaQueryList.addEventListener("change", handleMediaChange);

    return () =>
      mediaQueryList.removeEventListener("change", handleMediaChange);
  }, [mediaQuery]);

  return matched;
}

export default useMediaQuery;
