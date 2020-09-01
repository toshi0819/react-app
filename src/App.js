import React from 'react';

class App extends React.Component {
  render(){
    const gree = "Hi, Tom!";
    const aree = " nice to meet you";
    const dom = <h1>{gree + aree}</h1>
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => { console.log("I'm Changed.") }} />
    </React.Fragment>
    
  );
  }
}

export default App;
