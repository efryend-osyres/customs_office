"use client";

import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Card = "/img/photos/photo_2.png";

export default function Section3Card() {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]); // Mueve hacia arriba
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.05]); // Ligero zoom
    const rotateZ = useTransform(scrollYProgress, [1, 0], [-10, -25]); // 0° a 15°
    const rotateX = useTransform(scrollYProgress, [1, 0], [15, 30]); // 0° a 15°
    const opacity = useTransform(scrollYProgress, [0.01, 0.4], [0, 1]); // Ligero cambio de opacidad

    return (
        <motion.div
            id="card"
            ref={cardRef}
            style={{
                y,
                scale,
                rotateX,
                rotateZ, // Aplica rotación en el eje Y
                opacity,
                transformPerspective: 1000, // Da profundidad 3D
            }}
            className="bg-white p-8 pb-24 w-[24rem] h-[25rem] border border-brand-carbon-200 rounded-2xl mx-auto">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image src={Card} alt="photo_1" fill objectFit="cover" />
            </div>
        </motion.div>
    );
}
