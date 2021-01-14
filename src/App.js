import React, { useState } from 'react';
import styled from '@emotion/styled'
import './App.css';
import Frase from './Components/Frase';


const Contenedor = styled.div`
  display:flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction:column;
`
const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 30%, #0f574e 100%);
  background-size: 200px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover {
    cursor:pointer;
    background-size: 500px;
  }
`;

function App() {

  const [frase, guardarFrase] = useState({});
  
  //se utiliza async await fetch para consultar el api de frases
  const ConsultarAPI = async () =>
  {
    
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');    
    const fraseApi = await api.json();
  
    let author = "";
    switch(fraseApi[0].author){
        case "Hank Schrader":{
          author = "Henry Schrader"
          break;
        }

        case "Badger":{
          author = "Brandon Mayhew"
          break;
        }

        default: { 
          //statements; 
          author = fraseApi[0].author;
          break; 
       } 
              
    }
    

    const apiImage = await fetch('https://www.breakingbadapi.com/api/characters?name='+author)
    const imageApi = await apiImage.json();

    //console.log(imageApi)
    if(imageApi.length > 0){
      fraseApi[0].img = imageApi[0].img;
    }else{
      fraseApi[0].img = null;
    }
    

    guardarFrase(fraseApi[0]);
    console.log(frase)

  }
  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={ConsultarAPI}>          
        Search Random Quote
    </Boton>
    </Contenedor>
    
  );
}

export default App;
