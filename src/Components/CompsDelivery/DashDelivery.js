import styles from "./DashDelivery.module.css"
export default function DashDelivery({text,text_2,time,ident}){
    return(
        <div className={styles.containerInfo}>
            <div className={`${styles.texts} ${styles.display}`}>
                <span>{text}</span>
                <span>{text_2}</span>
            </div>
            <div className={`${styles.numbers} ${styles.display}`}>
                <span>{time}</span>
                <span>{ident}</span>
            </div>
        </div>
    )
}