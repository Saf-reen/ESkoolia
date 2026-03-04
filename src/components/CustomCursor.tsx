import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
    const [variant, setVariant] = useState("default");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
            return;
        }

        document.body.classList.add("hide-cursor");

        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // ElementsFromPoint is sometimes null/empty if cursor is outside viewport
            const element = document.elementFromPoint(e.clientX, e.clientY);
            if (!element) return;

            if (element.closest(".cursor-green-section")) {
                setVariant("orange");
                document.body.classList.add("green-scroll");
                document.body.classList.remove("orange-scroll");
            } else if (element.closest(".cursor-orange-section")) {
                setVariant("green");
                document.body.classList.add("orange-scroll");
                document.body.classList.remove("green-scroll");
            } else {
                // Reset scrollbar logic
                document.body.classList.remove("green-scroll");
                document.body.classList.remove("orange-scroll");

                if (element.closest("a, button, [role='button'], .hover-target, .cursor-pointer")) {
                    setVariant("grow");
                } else {
                    setVariant("default");
                }
            }
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.classList.remove("hide-cursor");
        };
    }, []);

    // Use requestAnimationFrame for smooth dot trailing
    useEffect(() => {
        let animationFrameId: number;

        const updateDotPosition = () => {
            setDotPosition(prev => ({
                x: prev.x + (position.x - prev.x) * 0.15, // Lower coefficient = more delay
                y: prev.y + (position.y - prev.y) * 0.15
            }));
            animationFrameId = requestAnimationFrame(updateDotPosition);
        };

        updateDotPosition();

        return () => cancelAnimationFrame(animationFrameId);
    }, [position]);

    if (isMobile) return null;

    const getStyle = () => {
        switch (variant) {
            case "orange":
                return "border-orange-500 bg-orange-500/10 w-16 h-16 -ml-8 -mt-8 backdrop-blur-sm";
            case "green":
                return "border-green-700 bg-green-700/10 w-16 h-16 -ml-8 -mt-8 backdrop-blur-sm";
            case "grow":
                return "border-orange-500 bg-orange-500/10 w-20 h-20 -ml-10 -mt-10 backdrop-blur-sm";
            default:
                return "border-orange-500 w-10 h-10 -ml-5 -mt-5 backdrop-blur-sm";
        }
    };

    const dotColor =
        variant === "green"
            ? "bg-green-700"
            : "bg-orange-500";

    return (
        <>
            {/* Outer Circle - Immediate Follow */}
            <div
                className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full filter drop-shadow-lg transition-[width,height,background-color,border-color,margin] duration-300 ease-out border ${getStyle()}`}
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                }}
            />

            {/* Inner Dot - Trailing Follow */}
            <div
                className={`fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full transition-colors duration-300 -ml-1 -mt-1 ${dotColor}`}
                style={{
                    transform: `translate3d(${dotPosition.x}px, ${dotPosition.y}px, 0)`,
                }}
            />
        </>
    );
}
