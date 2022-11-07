import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate, { State } from "../logic/calclate";
import { useState } from "react";
import "./Calculator.module.scss"

export default function Calculator(){
    const [state,setState] = useState<State>({
        current: "0",
        operand: 0,
        operator: null,
        isNextClear: false
    })
    const buttonHandler = (code:string) =>{
        const nextState = calculate(code,state)
        setState(nextState);
    }
    return (
        <div>
            <Display value = {state.current}/>
            <ButtonPanel buttonHandler={buttonHandler}/>
        </div>
    );
}
