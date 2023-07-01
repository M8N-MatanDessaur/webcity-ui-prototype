import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

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

const Outside = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image:url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png);
    background-size: 10%;

    @media (max-width: 480px) {
        background-size: 25%;
    }
    `;

const Tilt = styled.div`
    position: relative;
    width: max-content;
    max-height: 450px;
    display: flex;
    flex-direction: column;
    background: var(--foreground-color);
    opacity: 0.8;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    overflow: scroll;
    scrollbar-width: thin;
    scrollbar-color: var(--text-color) var(--foreground-color);
    &::-webkit-scrollbar {
        width: 12px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 50px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--text-color);
        border-radius: 20px;
        border: 3px solid var(--foreground-color);
    }

    @media (max-width: 680px) {
        max-height: 500px;
        width: 90%;
        margin: 0 10px;
    `;
