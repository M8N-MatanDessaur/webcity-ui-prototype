import React, { useEffect, useRef } from 'react';

import { Outside, Tilt } from './TiltContainer.styles';

export default function TiltContainer({children}) {
    const constrain = 20;
    const mouseOverContainerRef = useRef(null);
    const ex1LayerRef = useRef(null);

    const transforms = (x, y, el) => {
        let box = el.getBoundingClientRect();
        let calcX = -(y - box.y - (box.height / 2)) / constrain;
        let calcY = (x - box.x - (box.width / 2)) / constrain;

        return "perspective(1000px) "
            + "rotateX(" + calcX + "deg) "
            + "rotateY(" + calcY + "deg) ";
    }

    const transformElement = (el, xyEl) => {
        el.style.transform = transforms.apply(null, xyEl);
    }

    useEffect(() => {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|ios/i.test(navigator.userAgent)) {
            const mouseOverContainer = mouseOverContainerRef.current;
            const ex1Layer = ex1LayerRef.current;

            const mouseMoveHandler = (e) => {
                let xy = [e.clientX, e.clientY];
                let position = xy.concat([ex1Layer]);

                window.requestAnimationFrame(function () {
                    transformElement(ex1Layer, position);
                });
            };

            mouseOverContainer.addEventListener('mousemove', mouseMoveHandler);

            return () => {
                mouseOverContainer.removeEventListener('mousemove', mouseMoveHandler);
            };
        }
    }, []);

    return (
        <Outside ref={mouseOverContainerRef} id="outside">
            <Tilt ref={ex1LayerRef} id="tilting-layer">
                {children}
            </Tilt>
        </Outside>
    );
}