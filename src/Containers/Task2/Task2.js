import React, {Component} from 'react';
import JokeChuck from "./JokeChuck/JokeChuck";

class Task2 extends Component {
        state= {
            data: [],
        };
    async jokeAdd() {
        let data = [];
         for(let i = 0; i < 5; i++){
             const response =  await fetch('http://api.icndb.com/jokes/random');
             const joke = await response.json();
             let obj = {
                 title: joke.value.joke,
                 id: joke.value.id,
             };
             data.push(obj);
         }
            this.setState({data})
    };


    render() {
        return (
            <div className="task2">
                {this.state.data.map((chuck)=> <JokeChuck key={chuck.id}  value={chuck.title}/>)}
                <button className="btnJoke" onClick={()=>this.jokeAdd()}>JOCK</button>
            </div>
        );
    }
}

export default Task2;