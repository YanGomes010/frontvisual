import styles from "./ButtonDefault.module.css"

export default function Button({src,text,className,href}){
    return(
        <div className={styles.containerBoxA}>
        <div className={styles.boxA}>
    <a className={className} href={href}><img src={src} alt=""/><span>{text}</span></a>
    
    </div>
    </div>
    )    
}