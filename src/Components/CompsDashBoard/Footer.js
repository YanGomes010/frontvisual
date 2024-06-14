import styles from "./Footer.module.css"
import profile from "../../images/profile.svg"
import report from "../../images/report.svg"
import home from "../../images/home.svg"
import FooterCards from "./FooterCards"
import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <div className={styles.footer}>
            <Link to='/pigz/dashboard'><FooterCards src={report} text="Dashboard"/></Link>
            <Link to='/pigz'><FooterCards src={home} text="Inicio"/></Link>
            <Link to='/pigz/delivery'><FooterCards src={profile} text="Perfil"/></Link>
        </div>
    )
}