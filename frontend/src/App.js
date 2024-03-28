
import notfound from './notfound.gif';
import './App.css';
import AddMovie from './AddMovie';
import Register from './Register';
import Login from './Login';
import Portal from './Portal';
import Home from './Home';
import NotFound from './NotFound';
import {Routes,Route} from "react-router-dom"
import Movie from './Movie';
import MovieList from './MovieList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import MovieDetail from './MovieDetail';
import EditMovie from './EditMovie';

function App() {

  const[mode,setMode]=useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{minHeight:"100vh",borderRadius:"0%"}} elevation={0} >
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}/>
        <Route path="/portal" element={<Portal mode={mode} setMode={setMode}/>}>
          <Route path="addmovie" element={<AddMovie/>}/>
          <Route path="home" element={<Home/>}/>

          <Route path="movielist" element={<MovieList/>}/>
          <Route path="edit/:id" element={<EditMovie/>}/>
          <Route path="view/:id" element={<MovieDetail/>}/>
        </Route> 
        
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
