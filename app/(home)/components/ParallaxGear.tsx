"use client";

import { motion } from "framer-motion";

const Gear = "/svg/gear.svg";

export default function ParallaxGear() {
    return (
        <div className="relative w-full h-full">
            <motion.div
                className="absolute w-[80rem] h-[80rem] top-[-50%] left-[-10%] z-[-1]"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 200,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                }}>
                <object
                    className="h-full w-full"
                    type="image/svg+xml"
                    data={Gear}
                    aria-label="hero">
                    svg-gear
                </object>
            </motion.div>
        </div>
    );
}
