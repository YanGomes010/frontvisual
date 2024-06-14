import logo from "../../images/logo.svg"
import Form from "../Form/Form"
import styles from "./Login.module.css"
//@yangomes010, desafio Pigz janeiro 2023

export default function LoginPage(){
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <img alt="Logo" src={logo}/>
                <span>Para entregadores</span>
            </div>
            <Form/>
        </div>
    )
}