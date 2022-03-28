import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
constructor(){
super();
this.state = {
 wetter: 0};
 }

 componentDidMount = () => {
    axios.get("/getRtWetter").then(response => {
    let temp = response.data.temp - 273.15;
    this.setState({wetter: temp.toFixed(2)})})
 };
 render(){
  return (
      <div className="App">

      <h1>Registration:</h1>
        <p> Benutzername </p>
        <input type="text"></input>
        <p> Password </p>
        <input type="password"></input>
        <p></p>
        <input type="submit" value="Submit"></input>
        <h1>Login</h1>
        <p> Benutzername </p>
        <input type="text"></input>
        <p> Password </p>
        <input type="password"></input>
        <p></p>
        <input type="submit" value="Submit"></input>
        <h1>Wetter in Reutlingen</h1>
        <p>{this.state.wetter} °C</p>
      </div>
    );
  }
}

export default App;

