import React, { useEffect, useRef, useState } from "react";

import { ServiceWrapper, ServiceIcon, ServiceTitle, ServiceDescription } from "./Service.styles";

export default function Service({ svg, title, description }) {
    const [inView, setInView] = useState(false);
    const [animated, setAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated) {
                    setInView(true);
                    setAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, animated]);

    return (
        <ServiceWrapper ref={ref} className={inView ? "in-view" : ""}>
            <ServiceIcon>
                {svg}
            </ServiceIcon>
            <ServiceTitle>
                {title}
            </ServiceTitle>
            <ServiceDescription>
                {description}
            </ServiceDescription>
        </ServiceWrapper>
    );
}
