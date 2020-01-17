import React from 'react';
import './App.css';
import './styles.scss';
import axios from 'axios';

class App extends React.Component{
    state = {
      players:[]
    }
    componentDidMount () {
      axios.get('http://localhost:5000/api/players')
      .then(res => {
        console.log("data",res)
        this.setState ({
          players: res.data
        })
  
        })
        .catch (err =>{
          console.log("Data not received", err)
      })
    }
    render () {
  return (
    <div >
      <p>Put the things here later</p>
    </div>
  );
  }
}

export default App;
