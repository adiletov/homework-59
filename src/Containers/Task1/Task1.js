import React, {Component} from 'react';
import EntryField from "./EntryField/EntryField";

class Task1 extends Component {
    state={
        movie: "",
        movies: [],
        disable: true,
    };
    getMovie(e){
        this.setState({movie: e.target.value, disable: false})
    }
    addMovie(){
        let movies = [...this.state.movies];
        let movie ={
            title: this.state.movie,
        };
        movies.push(movie);
        this.setState({movies});
    }
    removeMovie(index){
        let movies = [...this.state.movies];
        movies.splice(index,1);
        this.setState({movies})
    }

    changeMovie(e, index){
        let movies = [...this.state.movies];
        movies[index].title = e.target.value;
        this.setState({movies})
    }
    render() {
        return (
            <div className="Task1">
                <input className="searchInput" type="text" placeholder="Add new Movie" onChange={(event)=> this.getMovie(event)}/>
                <button className={this.state.disable === true ? "btnSearch" : 'btnActive'}
                        disabled={this.state.disable}
                        onClick={()=>this.addMovie()}>ADD</button>
                <div className="cardsMovie">
                    {this.state.movies.length > 0 ?
                        this.state.movies.map((movies, index)=> <EntryField
                        key={index}
                        title={movies.title} count={index+1}
                        onChangeMovie={(event)=>this.changeMovie(event, index)}
                        removeMovie={()=> this.removeMovie(index)}/>) : <div>Введите название фильмов!!!</div>}
                </div>
            </div>
        );
    }
}

export default Task1;