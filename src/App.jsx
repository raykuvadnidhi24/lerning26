import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Component } from 'react'
// import './App.css'
import { ContentComponent } from './assets/components/ContentComponent'
import { FooterComponent } from './assets/components/FooterComponent'
import { HeaderComponent } from './assets/components/HeaderComponent'
import { MapDemo1 } from './assets/components/MapDemo1'
import { MapDemo2 } from './assets/components/MapDemo2'
import { MapDemo3 } from './assets/components/MapDemo3'
import { MapDemo4 } from './assets/components/MapDemo4'
import { MapDemo5 } from './assets/components/MapDemo5'
import { MapDemo6 } from './assets/components/MapDemo6'
import { MapDemo7 } from './assets/components/MapDemo7'
import { MapDemo8 } from './assets/components/MapDemo8'
import { MapDemo9 } from './assets/components/MapDemo9'
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./assets/components/NetflixHome";
import { NetflixMovies } from "./assets/components/NetflixMovies";
import { NetflixShows } from "./assets/components/NetflixShows";
import { NetflixGames } from './assets/components/NetflixGames';
import { NetflixPodcast } from './assets/components/NetflixPodcast';
import { NetflixStories } from './assets/components/NetflixStories';
import { Navbar } from "./assets/components/Navbar";
import { Watch } from './assets/components/watch';
import { Teams } from './assets/components/Teams';
import { TeamDetails } from './assets/components/TeamDetails';
import { ErrorNotFound } from './assets/components/ErrorNotFound';
import { HomeComponent } from "./assets/components/HomeComponent";



function App() {

  return (
    
      <div>
         <Navbar></Navbar>
      
      <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route> 
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/netflixgames" element={<NetflixGames />}></Route>
        <Route path="/netflixpodcast" element={<NetflixPodcast />}></Route>
        <Route path="/netflixstories" element={<NetflixStories />}></Route>
        <Route path="/watch/:name" element={<Watch />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
        <Route path="/teamdetails/:name" element={<TeamDetails />}></Route>

        <Route path="/*" element = {<ErrorNotFound/>}></Route>
        
        <Route path="/" element = {<HomeComponent/>}></Route>
        
       
      </Routes>
        
        
      </div>
     
  )
}

export default App;
