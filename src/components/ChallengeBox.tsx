import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeboxContainer}>

            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt="body"/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada</p>
                    </main>

                    <footer>

                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completei
                        </button>

                    </footer>
                </div>
            ) : (
                <div className={styles.challengeboxNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level-up"/>
                        Avance de levels completando desafios
                    </p>
                </div>
            ) }
            
        </div>
    );
}