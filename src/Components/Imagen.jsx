import React from 'react'
import styled from "@emotion/styled";


const ContenedorImagen = styled.img`
  display: flex;
  
  width:25%;
  justify-items:center;
  padding-bottom:1rem;
  
`;

const Imagen = ({frase}) => {
    return (
        (
            frase.img !== null ?  <ContenedorImagen src={frase.img} alt={frase.author} /> : null
        )
       
      );
}
 
export default Imagen;