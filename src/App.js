import React from 'react';
import "./App.css";
const App = () => (<Counter> </Counter>)

class Counter extends React.Component{
  constructor(props){
    super(props)
     console.log(this.state)
     this.state = { text : "",
                    text2 : "",
                    sum: "",
                    mode : " + ",
                    modeView : " ",
                    buttonFlg : false}
  }

  setButtonFlg = () => {
    if (this.state.value !== "" && this.state.value2 !== "" && !this.state.mode !== "") {
      this.setState({ buttonFlg: true })
    }
  }

  handlePlusButton = () => {
    console.log("handlePlusButton")
    this.setState({count : this.state.count + 1})
  }

  handleMinusButton = () => {
    console.log("handleMinusButton")
    this.setState({ count: this.state.count - 1 })
  }

  changetextarea = (obj) => {
    this.setState({ [obj.target.name]: obj.target.value})
    this.setButtonFlg();
  }

  changeMode(e) {
    this.setState({mode : e.target.value,
                   modeView : e.target.value
    })
    this.setButtonFlg();
    
  }
  getSum = () => {
    console.log("sum")
    var result = 0;
    var value1 = this.state.text
    var value2 = this.state.text2
    switch(this.state.mode){
      case "+" :
        result = Number(value1) + Number(value2)
        break;
      case "‐":
        result = Number(value1) - Number(value2)
        break;
      case "×":
        result = Number(value1) * Number(value2)
        break;
      case "÷":
        result = Number(value1) / Number(value2)
        break;
      default :
        console.log("error")
        break
    }
    this.setState({sum: " = " + result})
  }

  render(){
    console.log(this.state)
  return (
    <React.Fragment>
      <div>
        <h1>{this.state.text} {this.state.modeView} {this.state.text2} {this.state.sum}</h1>
      </div>
      <input type="number" name="text" value={this.state.text} onChange={this.changetextarea.bind(this)} size="5"/>
      {this.state.mode}
      <input type="number" name="text2" value={this.state.text2} onChange={this.changetextarea.bind(this)} size="5"/>
      {this.state.sum}
      <br/>
      <br/>
      <button className="buttons" value="+" onClick={this.changeMode.bind(this)}>+</button>  
      <button className="buttons" value="‐" onClick={this.changeMode.bind(this)}>-</button>
      <button className="buttons" value="×" onClick={this.changeMode.bind(this)}>×</button>
      <button className="buttons" value="÷" onClick={this.changeMode.bind(this)}>÷</button>
      <button className={this.state.buttonFlg ? "buttons getAns" : "buttons"} onClick={this.getSum} disabled={!this.state.text || !this.state.text2 || !this.state.mode }>計算</button>
    </React.Fragment>
  )
  }
}

export default App;
