import './Calculator.css'
import { useState } from "react"

function Calculator(){
    const [calculate, setCalculate] = useState('');
    const [result, setResult] = useState('');

    const symbols= ['+', '-', '*', '/', '.']

    const updateCalc = value => {

        if(
            (symbols.includes(value) && calculate === '') || 
            (symbols.includes(value) && symbols.includes(calculate.slice(-1)))
          )
        {
            return;
        }
        setCalculate(calculate + value)
        if(!symbols.includes(value)){
            setResult(eval(calculate + value).toString().toFixed(2))
        }
    }

    const calc = () => {
       setCalculate(eval(calculate).toString()) 
    }

    const Clear = () => {
        setCalculate("")
    }

    return(
    <div className="calculator">
       <div className="display">
           { <span>{result}</span>}
           {calculate || '0'}
       </div>
        <div class="operators">
             <button onClick={() => updateCalc('+')}>+</button>
             <button onClick={() => updateCalc('-')}>-</button>
             <button onClick={() => updateCalc('*')}>*</button>
             <button onClick={() => updateCalc('/')}>/</button>

             <button onClick={Clear}>Clear</button>
        </div>
        <div className="digits">
        <button onClick={() => updateCalc('1')}>1</button>
        <button onClick={() => updateCalc('2')}>2</button>
        <button onClick={() => updateCalc('3')}>3</button>
        <button onClick={() => updateCalc('4')}>4</button>
        <button onClick={() => updateCalc('5')}>5</button>
        <button onClick={() => updateCalc('6')}>6</button>
        <button onClick={() => updateCalc('7')}>7</button>
        <button onClick={() => updateCalc('8')}>8</button>
        <button onClick={() => updateCalc('9')}>9</button>
        <button onClick={() => updateCalc('0')}>0</button>
        <button onClick={() => updateCalc('.')}>.</button>

        <button onClick={calc}>=</button>
        </div>
    </div>
    )
}

export default Calculator