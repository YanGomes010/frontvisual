import Styles from "./Budget.module.css"
import View from "../../images/eye_white.svg"
import Hide from "../../images/eyeWhiteHide.svg"
import { useState } from "react";
export default function Budget(){
    let date = new Date();
   let day= date.getDate();
   let month = date.getMonth()+1;
   if(month<10){
     month ="0"+month
   }

   const [text, setText]= useState("R$ 150")
   const [icon, setIcon]= useState(Hide)
 
 const handleToggle=()=>{
   if(text==="R$ 150"){
     setText("----")
     setIcon(View)
   }else{
     setText("R$ 150")
     setIcon(Hide)
   }
 }
 

    return(
        <div className={Styles.cardBudget}>
            <div>
                <h4>Ganhos do dia</h4>
                <p>{`${day}/${month}`}</p>
            </div>
            <div>
                <h4 className={Styles.budget}>{text}</h4>
                <img onClick={handleToggle} src={icon} alt="View"/>
            </div>
        </div>
    )
}