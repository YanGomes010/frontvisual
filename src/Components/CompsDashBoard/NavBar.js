import Arrow from "../../images/arrow_back_black_24dp.svg"
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom"
export default function Navbar({text,to}){
    return(
        <nav className={styles.navBar}>
            <header>
                <Link to={to}><img src={Arrow} alt="Arrow"/></Link>
                <h3>{text}</h3>
            </header>
        </nav>
    )
}