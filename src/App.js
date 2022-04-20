import React,{ useState } from "react";
import "./App.css";
import Header from './Component/Header';
import Search from './Component/Search';
import MovieData from './Component/MovieData';
import MovieList from './Component/MovieList';
import AddMovie from './Component/AddMovie';
import {Router,Route} from 'react-router-dom'

function App(){
  const [title , setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const [Data, setData]=useState(MovieData)

  const handleTitle=(input)=>{
    setTitle(input)
  }
  const handleRate=(input)=>{
    setRate (input)
  }
  const handleData=(input)=>{
    setData([...Data,input])
  }

  return(
    <div className="App">
      
      <Header  style={{color: "black"}} text="F I R S T M O V I E S" />
      <Search />
      <p className="App-intro">First Movies</p>
      <AddMovie />
      <MovieList Data={Data}
      title={title}
      rate={rate}/>
    

    </div>
    
  )

}

export default App