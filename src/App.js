import React,{ useState } from "react";
import "./App.css";
import Header from './Component/Header';
import Search from './Component/Search';
import MovieData from './Component/MovieData';
import MovieList from './Component/MovieList';
import AddMovie from './Component/AddMovie';


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
      <Header  text="ANIME MOVIES" />
      <Search 
      handleTitle={handleTitle}
      handleRate={handleRate} />
      <p className="App-intro">Top Movies</p>
      <AddMovie handleData={handleData}/>
      <MovieList Data={Data}
      title={title}
      rate={rate}/>

    </div>
    
  )

}

export default App