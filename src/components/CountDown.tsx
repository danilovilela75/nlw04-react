import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/countdown.module.css';

import { ChallengesContext } from '../contexts/ChallengeContext';

export function CountDown() {

    const { 
        minutes, 
        seconds, 
        hasFinish, 
        isActive, 
        resetCountdown, 
        startCountdown 
    } = useContext(CountdownContext);

    const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
    const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');
    

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