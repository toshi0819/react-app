import React from 'react';

const App = () => {
  const profiles = [
    { name : "Taro", age  : 10},
    { name: "Hanako", age: 8},
    { name: "No age",  }
  ]
  return (
    <div>
      {
        profiles.map((profile,index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  );
}

function User(props){
return <div>Hi, I'm {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age : 1
}

export default App;
