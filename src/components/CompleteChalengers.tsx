import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/completeChalengers.module.css';

export function CompleteChalengers() {

    const { challengesCompleted } = useContext(ChallengesContext);

    return(
        <div className={styles.completedContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}