import styles from "./ButtonDelivery.module.css"
export default function ButtonDelivery({src,title,text}){
    return(
        <>
        <a className={styles.btn}>
            <div className={styles.boxIMG}>
            <img alt="img" src={src}/>
            </div>
            <div className={styles.boxTexts}>
                <span>{title}</span>
                <span>{text}</span>
            </div>
        </a>
        </>
    )
}