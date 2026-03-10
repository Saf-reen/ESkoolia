import { motion } from "framer-motion";

export default function Loader() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-[99999]">
            <div className="flex gap-8 mb-4">
                {[0, 1].map((i) => (
                    <div key={i} className="relative w-16 h-16 rounded-full border-4 border-primary/20 flex items-center justify-center">
                        <motion.div
                            className="w-4 h-4 bg-primary rounded-full absolute"
                            animate={{
                                x: [0, 20, 0, -20, 0],
                                y: [20, 0, -20, 0, 20],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.5,
                            }}
                        />
                        <div className="w-10 h-10 rounded-full border-2 border-primary/10 border-dashed" />
                    </div>
                ))}
            </div>
            <div className="text-primary font-display font-bold text-xl tracking-tight animate-pulse">
                eSkoolia
            </div>
        </div>
    );
}
