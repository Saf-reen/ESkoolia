import { useRef, useState } from "react";

export const useVoiceReader = () => {
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const speak = (text: string) => {
        if (!text) return;

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-US";
        utterance.rate = 1;
        utterance.pitch = 1;

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    };

    const pause = () => window.speechSynthesis.pause();
    const resume = () => window.speechSynthesis.resume();
    const stop = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    };

    return { speak, pause, resume, stop, isSpeaking };
};
