import styles from "./index.module.css";

export const Loading = () => {
    return (
        <div className={styles.spinnerContainer}>
            <div className="spinner-border text-info"></div>
        </div>
    )
};