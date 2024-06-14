import styles from "./Budget.module.css"
export default function Budget({price,textPrice}){
    return(
        <div className={styles.valueDelivery}>
            <span>{textPrice}</span>
            <span>{price}</span>
        </div>
    )
}