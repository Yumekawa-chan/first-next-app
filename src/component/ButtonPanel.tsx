import styles from "../../styles/Calculator.module.css"

const ButtonPanel = (props:{
    buttonHandler:(code:string)=>void;
}) => {
    return (
        <div className={styles.center}>
            <div>
                <button onClick={() => props.buttonHandler('7')} className={styles.buttonPanel}>7</button>
                <button onClick={() => props.buttonHandler('8')} className={styles.buttonPanel}>8</button>
                <button onClick={() => props.buttonHandler('9')} className={styles.buttonPanel}>9</button>
                <button onClick={() => props.buttonHandler('AC')} className={styles.buttonPanel}>AC</button>
            </div>
            <div>
                <button onClick={() => props.buttonHandler('4')} className={styles.buttonPanel}>4</button>
                <button onClick={() => props.buttonHandler('5')} className={styles.buttonPanel}>5</button>
                <button onClick={() => props.buttonHandler('6')} className={styles.buttonPanel}>6</button>
                <button onClick={() => props.buttonHandler('-')} className={styles.buttonPanel}>-</button>
            </div>
            <div>
                <button onClick={() => props.buttonHandler('1')} className={styles.buttonPanel}>1</button>
                <button onClick={() => props.buttonHandler('2')} className={styles.buttonPanel}>2</button>
                <button onClick={() => props.buttonHandler('3')} className={styles.buttonPanel}>3</button>
                <button onClick={() => props.buttonHandler('+')} className={styles.buttonPanel}>+</button>
            </div>
            <div>
                <button onClick={() => props.buttonHandler('0')} className={styles.buttonPanel}>0</button>
                <button onClick={() => props.buttonHandler('.')} className={styles.buttonPanel}>.</button>
                <button onClick={() => props.buttonHandler('D')} className={styles.buttonPanel}>D</button>
                <button onClick={() => props.buttonHandler('=')} className={styles.buttonPanel}>=</button>
            </div>
        </div>
    );
}

export default ButtonPanel;