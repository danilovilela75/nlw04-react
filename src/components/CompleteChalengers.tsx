import styles from '../styles/components/completeChalengers.module.css';

export function CompleteChalengers() {
    return(
        <div className={styles.completedContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    );
}