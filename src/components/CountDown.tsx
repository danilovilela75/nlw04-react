import { useState, useEffect } from 'react';
import styles from '../styles/components/countdown.module.css';

let countdownTimeOut: NodeJS.Timeout;

export function CountDown() {

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsactive] = useState(false);
    const [hasFinish, setHasFinish] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
    const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsactive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeOut);
        setIsactive(false);
        setTime(0.1 * 60);
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
            console.log("Finalizado countdown");
        }
    }, [isActive, time]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                    
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinish ? (
                <button
                    disabled
                    className={styles.CountdownButton}
                >
                    Ciclo Encerrado <img src="icons/check.png" alt="check"/>
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                            type="button"
                            className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar Ciclo
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.CountdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </button>
                    ) }
                </>
            )}

            

        </div>
    );
}