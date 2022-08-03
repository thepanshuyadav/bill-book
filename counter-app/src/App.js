import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1)

  const handleDecrement = () => {
    setCount(count-step)
  }
  const handleIncrement = () => {
    setCount(count+step)
  }
  const changeStep = (event) => {
    setStep(+event.target.value)
  }
  return(
      <div className="App">
        <h1>Counter App</h1>
        <main className="App-main">
          <article className="Card">
            <button className={"decrement"} onClick={handleDecrement}>-</button>
            <p className={"value"} onPre><b>{count}</b></p>
            <button className={"increment"} onClick={handleIncrement}>+</button>
            <input onChange={changeStep} type={"number"} id={"number"} className={"input"} value={step} min={1}/>
          </article>
        </main>
      </div>
  )
}

// Using Class Component
// class App extends React.Component{
//     state = {
//         count: 0,
//         step: 1
//     }
//     handleIncrement = () => {
//         this.setState({
//             count: +this.state.count + +this.state.step
//         })
//     }
//     handleDecrement = () => {
//         this.setState({
//             count: (+this.state.count) - (+this.state.step)
//         })
//     }
//     changeStep = (event) => {
//         this.setState({
//             step: +event.target.value
//         })
//     }
//     render() {
//         return(
//             // JSX??
//             <div className="App">
//             <h1>Counter App</h1>
//             <main className="App-main">
//                 <article className="Card">
//                     <button className={"decrement"} onClick={this.handleDecrement}>-</button>
//                     <p className={"value"}><b>{this.state.count}</b></p>
//                     <button className={"increment"} onClick={this.handleIncrement}>+</button>
//                     <input onChange={this.changeStep} type={"number"} id={"number"} className={"input"} value={this.state.step} min={1}/>
//                 </article>
//             </main>
//         </div>
//         );
//     }
// }

export default App;
