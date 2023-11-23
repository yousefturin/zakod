import React from 'react'
import '../../App.css'
import DisplayScreen from '../DisplayScreen'
import Cards from '../Cards';
import Footer from '../Footer';
function Home(){
    return(
        <>
            <DisplayScreen />
            <Cards />
            <Footer/>
        </>
    )
}


export default Home;