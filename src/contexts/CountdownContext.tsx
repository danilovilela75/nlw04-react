import { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';

interface CountdownProviderProps {
    children: ReactNode;
}

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinish: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

let countdownTimeOut: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {

    const { startNewChallenges } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 20);
    const [isActive, setIsactive] = useState(false);
    const [hasFinish, setHasFinish] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    function startCountdown() {
        setIsactive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeOut);
        setIsactive(false);
        setTime(0.1 * 20);
        setHasFinish(false);
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
        else if (isActive && time === 0) {
            setHasFinish(true);
            setIsactive(false);
            startNewChallenges();
        }
    }, [isActive, time]);

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinish,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    );
}