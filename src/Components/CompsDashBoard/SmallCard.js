import styles from "./SmallCard.module.css"
export default function SmallCard({text,number}){
    return(
        <div className={styles.container_small}>
            <span className={styles.text}>{text}</span>
            <span className={styles.number}>{number}</span>
        </div>
    )
}