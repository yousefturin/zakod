import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import CaesarDisplay from "../CaesarDisplay";

export default function Caesar(){
    return(
        <>
            <h1 className='caesar'>Caesar</h1>
            <CaesarDisplay />
            <Footer/>
        </> 
      
    )
}