import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Component } from 'react';
// import './App.css'

import { FooterComponent } from './assets/components/FooterComponent';
import { HeaderComponent } from './assets/components/HeaderComponent';
import { MapDemo1 } from './assets/components/MapDemo1';
import { MapDemo2 } from './assets/components/MapDemo2';
import { MapDemo3 } from './assets/components/MapDemo3';
import { MapDemo4 } from './assets/components/MapDemo4';
import { MapDemo5 } from './assets/components/MapDemo5';
import { MapDemo6 } from './assets/components/MapDemo6';
import { MapDemo7 } from './assets/components/MapDemo7';
import { MapDemo8 } from './assets/components/MapDemo8';
import { MapDemo9 } from './assets/components/MapDemo9';
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
import { UseStateDemo1 } from './assets/components/UseStateDemo1';
import { UseStateDemo2 } from './assets/components/UseStateDemo2';
import { UseStateDemo3 } from './assets/components/UseStateDemo3';
import { Employees } from './assets/components/Employees';
import { FunctionDemo1 } from "./assets/components/FunctionDemo1";
import { InputDemo1 } from './assets/components/input/InputDemo1';
import { InputDemo2 } from './assets/components/input/InputDemo2';
import ContentComponent1 from "./assets/components/ContentComponent1";
import { FormDemo1 } from './assets/components/Form/FormDemo1';
import { FormDemo2 } from './assets/components/Form/FormDemo2';
import { FormDemo11 } from './assets/components/Form/FormDemo11';
import { FormDemo12 } from './assets/components/Form/FormDemo12';
import { ApiDemo1 } from './assets/components/api/ApiDemo1';
import { ApiDemo11 } from './assets/components/api/ApiDemo11';
import { ApiDemo12 } from './assets/components/api/ApiDemo12';
import { ApiDemo13 } from './assets/components/api/ApiDemo13';




// import { Student } from './assets/components/Student';











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
        <Route path="/netflixstories" element={<NetflixStories />}></Route>
        <Route path="/usestatedemo1" element={<UseStateDemo1 />}></Route>
        <Route path="/usestatedemo2" element={<UseStateDemo2 />}></Route>
        <Route path="/usestatedemo3" element={<UseStateDemo3 />}></Route>
        <Route path="/employees" element={<Employees />}></Route>
        <Route path="/inputdemo1" element={<InputDemo1 />}></Route>
        <Route path="/inputdemo2" element={<InputDemo2 />}></Route>
        {/* <Route path="/student" element={<Student />}></Route> */}
        <Route path="/functiondemo1" element={<FunctionDemo1 />}></Route>
        <Route path="/*" element = {<ErrorNotFound/>}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
        <Route path='/formdemo1' element={<FormDemo1/>}></Route>
        <Route path='/formdemo2' element={<FormDemo2/>}></Route>
        <Route path='/formdemo11' element={<FormDemo11/>}></Route>
        <Route path='/formdemo12' element={<FormDemo12/>}></Route>
        <Route path='/apidemo1' element={<ApiDemo1/>}></Route>
        <Route path='/apidemo11' element={<ApiDemo11/>}></Route>
        <Route path='/apidemo12' element={<ApiDemo12/>}></Route>
        <Route path='/apidemo13' element={<ApiDemo13/>}></Route>
        
        
        
        
       
      </Routes>
        
        
      </div>
     
  )
}

export default App;
