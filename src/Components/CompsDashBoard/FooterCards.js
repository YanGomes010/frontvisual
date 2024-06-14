import styles from "./FooterCards.module.css"


export default function FooterCards({src,text}){
    return(
        <div className={styles.card}>
            <img src={src} alt={text}/>
            <span>{text}</span>
        </div>
    )
}