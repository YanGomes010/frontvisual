import styles from "./TimeLine.module.css"
export default function Timeline(){
    return(
        <div className={styles.timeline}>
            <div className={styles.divContainer}>
                <div>
                    <span className={styles.spanTasks}>Coleta</span>
                </div>
                <div className={styles.divContainerInfo}>
                <span className={`${styles.spanInfo} `}>Restaurante Recanto da Peixada Distancia: 2km</span>
                </div>
            </div>
            <div className={styles.divContainer}>
                <div>
                <span className={styles.spanTasks}>Entrega</span>
                </div>
                <div className={styles.divContainerInfo}>
                    <span className={`${styles.spanInfo} `}>Av: Cabo dos Soldados - Caranã Distancia: 6km</span>
                </div>
            </div>
        </div>
    )
}
