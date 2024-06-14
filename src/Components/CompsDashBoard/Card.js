import styles from "./Card.module.css"
import SmallCard from "./SmallCard"

export default function Card({title}){
    return(
        <div className={styles.card}>
            <h4>{title}</h4>
            <div className={styles.boxCard}>
            <SmallCard text="Aceitas" number="15"/>
            <SmallCard text="Rejeitadas" number="5"/>
            <SmallCard text="Total" number="20"/>
            </div>

        </div>
    )
}