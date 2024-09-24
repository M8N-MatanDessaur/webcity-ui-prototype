import React, { Suspense, useEffect, useState, useRef, lazy } from "react";
import { Container, LoadingPlaceholder } from "./CanvasContainer.styles";

const LazySpline = lazy(() => import('@splinetool/react-spline'));

const OBSERVER_OPTIONS = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

export default function CanvasContainer({ children }) {
    const [isSplineVisible, setIsSplineVisible] = useState(false);
    const [isSplineLoaded, setIsSplineLoaded] = useState(false);
    const offeringRef = useRef(null);
    
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setIsSplineVisible(true);
        } else {
          entry.target.classList.remove('visible');
          setIsSplineVisible(false);
        }
      },
      OBSERVER_OPTIONS
    );
  
    if (offeringRef.current) {
      observer.observe(offeringRef.current);
    }
  
    return () => {
      if (offeringRef.current) {
        observer.unobserve(offeringRef.current);
      }
    };
  }, []);

  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
  };
    return (
        <Container ref={offeringRef}>
        {isSplineVisible && (
          <Suspense fallback={<LoadingPlaceholder></LoadingPlaceholder>}>
            <LazySpline
              scene="https://prod.spline.design/Uq-svW2LpfK3vn4h/scene.splinecode"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                position: "absolute",
                borderRadius: "15px",
                top: 0,
                left: 0,
                zIndex: -1,
                opacity: isSplineLoaded ? 1 : 0,
                transition: 'opacity 0.5s ease-out',
              }}
              onLoad={handleSplineLoad}
            />
          </Suspense>
        )}
        {children}
      </Container>
    );
    }