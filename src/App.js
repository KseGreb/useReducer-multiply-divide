import { useReducer } from "react";

function reducer(state, action){
  switch(action.type){
    case "Multiply": return {count: state.count * 5};
    case "Divide": return {count: state.count / 5}
  }
}

function App(){

const [state, dispatch] = useReducer(reducer, {count : 5} )

  return(
    <div>
      <p>{state.count}</p>
      <button onClick={()=> dispatch({type: "Multiply"})}>Multiply</button>
      <button onClick={()=> dispatch({type: "Divide"})}>Divide</button>
    </div>
  )
}

export default App;