"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SectionBar() {
    const [ready, setReady] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        setReady(true);
    }, [ready]);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start", "300px"],
    });

    const height = useTransform(scrollYProgress, [1, 0], ["5px", "25px"]);

    return (
        <>
            {ready && (
                <motion.div
                    ref={cardRef}
                    style={{
                        height,
                    }}
                    className="relative bg-brand-secundary w-full left-0 bottom-0 transition-all duration-200 h-1"></motion.div>
            )}
        </>
    );
}
