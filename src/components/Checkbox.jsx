import { useState } from "react"
import styles from "./Checkbox.module.css"



export default function Checkbox(props){
    const [x, setX] = useState("")

    
    const clickHandler = () => {
        if(x=="x"){
            setX("")
        }else if(x==""){
            setX("x")
        }
    }

    return(
        <div className={styles.box}>
            <div className={styles.checkbox} onClick={clickHandler}>
                {x}
            </div>
            <div className={styles.name}>{props.name}</div>
        </div>
    )
}