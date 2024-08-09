import React, { useRef, useEffect, useCallback } from "react";

import { BlobContainer, InnerBlob, OuterBlob } from "./Blob.styles";

export default function Blob({width, height}) {
  const blobRef = useRef(null);
  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);

    const currentRef = blobRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [handleIntersection]);

  return (
    <BlobContainer ref={blobRef} height={height} width={width} className="blob">
      <InnerBlob />
      <OuterBlob />
    </BlobContainer>
  );
}
