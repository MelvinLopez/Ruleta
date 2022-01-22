import React, { useEffect, useState } from 'react';
import { Form, Input, message, Button } from 'antd';
import styled from 'styled-components';
import { ollUser } from './../endPointDB/user';
import { Link } from "react-router-dom";

const Index = () => {

   const [Data, useData] = useState();

   const GetUser = async () => {
        const response = await ollUser();
         if (response.typeStatus === 'success'){
            console.log('%cindex.js line:14 response', 'color: #007acc;', response);
         } else {
            console.log('acceso denegado');
         }
   }

   useEffect(() => {
      GetUser();
   })
   
   return(
      <DivIndex>
         <h1 className='title'>
            Que quieres hacer hoy.!
         </h1>
         <div className='counterButtom'>
            <ButtonStyledSpin block >
               <Link to='GameRouletteGame'>
                  Juego de la ruleta
               </Link>  
               {/* <a href="/GameRouletteGame">Juego de la ruleta</a> */}
            </ButtonStyledSpin>
            <ButtonStyledSpin block >
               <Link to='GameAlphabetSoup'>
                  Sopa de letras
               </Link>
               {/* <a href="/GameAlphabetSoup">Sopa de letras</a> */}
            </ButtonStyledSpin>
            <ButtonStyledSpin block >
               <Link to='GameJackpot'>
                  Jackpot
               </Link>
               {/* <a href="/GameJackpot">Jackpot</a> */}
            </ButtonStyledSpin>
         </div>
      </DivIndex>
   )
}

const DivIndex = styled.div`
   width: 100%;
   // margin: 1em;
   display: flex;
   justify-content: cente;
   flex-direction: column;
   align-items: center;

   .title{
      margin: 1em;
      text-align: center;
   }
   .counterButtom{
      margin: 1em;
      width: 90%;
      display: flex;
      justify-content: cente;
      flex-direction: column;
      align-items: center;
   }
`;

const ButtonStyledSpin = styled(Button)`
   text-decoration: none;
   padding: 10px 25px 10px 25px;
   border: 1px solid #FFF;
   border-radius: 10px;
   background: #259118;
   color: #FFF;
   font-weight: 700;
   font-size: 20px;
   cursor: pointer;
   transition: 0.6s;
   height: auto !important;
	text-align: center;
	width: 100%;
`;

export default Index;