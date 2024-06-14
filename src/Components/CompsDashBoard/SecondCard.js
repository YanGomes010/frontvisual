import Input from "../Form/Input"
import Button from "./Button"
import styles from "./SecondCard.module.css"
import ButtonQR from "./ButtonDefault"
import QR from "../../images/QrCode.svg"
import { Link } from "react-router-dom"
export default function SecondCard({title}){
    return(
        <div className={styles.SecondCard}>
            <div className={styles.title}>
        <h4>{title}</h4>
        <span>Número de Identificação</span>
        </div>
        <div className={styles.boxInput}>
            <Input type="text" src=""/>
           <Link to="/pigz/dashboard/delivery"><Button text="OK"/></Link>
        </div>
        <ButtonQR href="/pigz" className={styles.accept} src={QR} text="Escanear QR code"/>
        </div>
        
    )
}