"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MapElement = "/svg/map.svg";

export default function Section2_5() {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [1, 0], [200, -400]); // Mueve hacia arriba
    const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.2]); // Ligero zoom
    const opacity = useTransform(scrollYProgress, [0.4, 0.01], [0.3, 0]); // Ligero cambio de opacidad

    return (
        <motion.div
            id="card"
            ref={cardRef}
            style={{
                y,
                scale,
                opacity,
            }}
            className="absolute w-[60%] left-0 z-[-1]">
            <object
                className="h-full w-full"
                type="image/svg+xml"
                data={MapElement}
                aria-label="hero">
                svg-logo
            </object>
        </motion.div>
    );
}
