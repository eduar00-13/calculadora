import { useState } from "react";
import "./index.css";
function App() {
  const [alm, setAlm] = useState({
    operacion: "",
    resultado: "",
  }
  );
  const [oper, setOper] = useState("");
  const [result, setResult] = useState("");
  const ops = ['+', '-', '*', '/'];
  const initialState = JSON.parse(localStorage.getItem("operaciones")) || [];
  const [operaciones, setOperaciones] = useState(initialState);

  const handleClickUp = (event) =>{
    if(
      (ops.includes(event.target.value) && oper === '') || 
      (ops.includes(event.target.value) && ops.includes(oper.slice(-1)))
    ){
      return;
    }
    setOper(oper + event.target.value);
    if(!ops.includes(event.target.value)){
      setResult(eval(oper + event.target.value).toString());
    }    
  }
  const handleSetResult = () => {
    setResult(setOper(eval(oper).toString()));
    setAlm({
      ...alm,
      operacion: oper,
      resultado: result,
    });
    if(!alm.operacion == "" || !alm.resultado == ""){
      setOperaciones([...operaciones, alm]);
      localStorage.setItem("operaciones", JSON.stringify([...operaciones, alm]));
    }
  }
  const handleClearInput = () => {
    if(oper == ''){
      return;
    } const value = oper.slice(0,-1);
    setOper(value);
  }
  const handleResetInput = () => {
    setOper(oper-oper);
    if(oper == '0'){
      return;
    } const value = oper.slice(0,-oper);
    setOper(value);
  }
  return (
    <div className="card-body shadow container-sm mt-4" style={{ width: "860px", font: "80px" }}>
    <div  className= "alert alert-success d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-calculator-fill" viewBox="0 0 16 16">
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5zm0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1z"/>
        </svg>
        <h2 align="center">CALCULADORA "OPERACIONES BÁSICAS"</h2>
    </div> 
      <div className="row">
        <div className="text-end">
          <input id="input" name="input" className="p-2 w-75 text-end" value={oper || "0"} disabled={true}>
            </input>
        </div>
        <div className="col-8 text-bg-primary" style={{width: "200px", color: "white"}}>
          <h3 style= {{color: "Grey" }}>Historial</h3>
          {
            operaciones.length === 0 ?
            "Sin Resultados"
            :
            (
              <ol>
                {operaciones.map((item,index) => {
                  return( <li key={index}>
                      { item.operacion } = { item.resultado } &nbsp;
                    </li>);
                })
                }
              </ol>
            )
          }
        </div>
        <div className="col card-body" style={{width: "640px"}}>
            <div className="operators">
                <button value = "+" onClick= {handleClickUp}>+</button>
                <button value = "-" onClick= {handleClickUp}>-</button>
                <button value = "*" onClick= {handleClickUp}>*</button>
                <button value = "/" onClick= {handleClickUp}>/</button>
            </div>
            <div className="digits">
                <button value = "1" onClick= {handleClickUp}>1</button>
                <button value = "2" onClick= {handleClickUp}>2</button>
                <button value = "3" onClick= {handleClickUp}>3</button>
                <button value = "4" onClick= {handleClickUp}>4</button>
                <button value = "5" onClick= {handleClickUp}>5</button>
                <button value = "6" onClick= {handleClickUp}>6</button>
                <button value = "7" onClick= {handleClickUp}>7</button>
                <button value = "8" onClick= {handleClickUp}>8</button>
                <button value = "9" onClick= {handleClickUp}>9</button>
                <button value = "." onClick= {handleClickUp}>.</button>     
                <button value = "0" onClick= {handleClickUp}>0</button>
                <button onClick = {handleClearInput}> ← </button>
                <button onClick = {handleResetInput}> A.C </button>
                <button onClick={() => handleSetResult()} value="=">=</button>
                <button value = "" onClick= {handleClickUp}>ON/OFF</button>
            </div>
        </div>
      </div>
    </div>
  );
}
export default App;