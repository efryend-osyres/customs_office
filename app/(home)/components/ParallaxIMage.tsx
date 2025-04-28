"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Back = "/img/sections/section_1.png";

export default function MovingImage() {
    return (
        <motion.div
            className="absolute w-[120%] h-full left-[-10%]"
            initial={{ x: "-7%" }} // Empieza fuera de la pantalla (izquierda)
            animate={{ x: "7%" }} // Termina fuera de la pantalla (derecha)
            transition={{
                duration: 50, // Duración más larga para un movimiento suave
                ease: "linear", // Movimiento constante (sin aceleración)
                repeat: Infinity, // Se repite infinitamente
                repeatType: "reverse", // Vuelve al inicio sin saltos
            }}>
            <Image src={Back} alt="background" fill objectFit="cover" />
        </motion.div>
    );
}
