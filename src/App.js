import React, { useState } from 'react';
import './App.css';

const App = () => {

    const [Resultado, setRestultado] = useState("");

    const clickear = (e) => {
        setRestultado(Resultado.concat(e.target.name));
    }

    const borrar_todo = () => {
        setRestultado("");
    }

    const borrar_ultimo = () => {
        if( Resultado === "Syntaxis Error"){
            setRestultado("")
        }else{
            setRestultado(Resultado.slice(0, Resultado.length - 1))
        }
    }

    const resultado = () => {
        try {
            setRestultado(eval(Resultado).toString())
        } catch (error) {
            setRestultado("Syntaxis Error")
            setTimeout(() => {
                setRestultado("")
            }, 3000)
        }
    }

    return (
        <>
            <div className="contenedor">
                <form>
                    <input className="monitor" text="text" value={Resultado} />
                </form>
                <div className="numeros_operadores">
                    <button id="Borrar" onClick={borrar_todo} >Borrar</button>
                    <button onClick={borrar_ultimo} >C</button>
                    <button name="/" onClick={clickear} >&divide;</button>
                    <button name="7" onClick={clickear} >7</button>
                    <button name="8" onClick={clickear} >8</button>
                    <button name="9" onClick={clickear} >9</button>
                    <button name="*" onClick={clickear} >&times;</button>
                    <button name="4" onClick={clickear} >4</button>
                    <button name="5" onClick={clickear} >5</button>
                    <button name="6" onClick={clickear} >6</button>
                    <button name="-" onClick={clickear} >&ndash;</button>
                    <button name="1" onClick={clickear} >1</button>
                    <button name="2" onClick={clickear} >2</button>
                    <button name="3" onClick={clickear} >3</button>
                    <button name="+" onClick={clickear} >+</button>
                    <button name="0" onClick={clickear} >0</button>
                    <button name="." onClick={clickear} >.</button>
                    <button id="resultado" onClick={resultado} >=</button>

                </div>
            </div>
        </>
    )
}

export default App
