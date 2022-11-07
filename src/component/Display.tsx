import styles from "../../styles/Display.module.css"

export default function Display(props:{
    value:string;
}){
    return (
        <div className={styles.display}>
            {props.value}
        </div>
    );
}
