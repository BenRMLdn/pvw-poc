import { createContext, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
const ResponsiveContext = createContext({
  isDesktopOrLaptop: false,
  isTabletOrMobile: false,
});
export function ResponsiveContextProvider(props: any) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1080px)',
  });
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1079px)',
  });
  const [isDesktopOrLaptopState, setIsDesktopOrLaptopState] =
    useState(isDesktopOrLaptop);
  const [isTabletOrMobileState, setIsTabletOrMobileState] =
    useState(isTabletOrMobile);
  useEffect(() => {
    setIsDesktopOrLaptopState(isDesktopOrLaptop);
    setIsTabletOrMobileState(isTabletOrMobile);
  }, [isDesktopOrLaptop, isTabletOrMobile]);
  return (
    <ResponsiveContext.Provider
      value={{
        isDesktopOrLaptop: isDesktopOrLaptopState,
        isTabletOrMobile: isTabletOrMobileState,
      }}
    >
      {props.children}
    </ResponsiveContext.Provider>
  );
}
export default ResponsiveContext;
