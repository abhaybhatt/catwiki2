import logo from './logo.svg';
import './App.css';
import TopBox from './components/TopBox/TopBox';
import MidBox from './components/MidBox/MidBox';
import BottomBox from './components/BottomBox/BottomBox';
import Footer from './components/Footer/Footer';
import Cat from './components/Cat/Cat';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const[breeds, setBreeds] = useState([])
  const[breedSelected, setBreedSelected] = useState({})
  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'x-api-key': '2ee1cb5f-c040-4a0c-ba22-689063c69776' },
    };
    fetch(`https://api.thecatapi.com/v1/breeds`, requestOptions)
    .then(response => response.json())
    .then(d =>{
        setBreeds(d)
    });
},[])
console.log('breed', breedSelected)
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element = {
            <div className="App">
               <TopBox setBreedSelected={setBreedSelected} breeds={breeds}/>
                <MidBox setBreedSelected={setBreedSelected}/>
                <BottomBox/>
                <Footer/>
            </div>
          }/>
          {breedSelected && breedSelected.image && <Route  path= "/cat" element = {<Cat cat={breedSelected} />}/>}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
