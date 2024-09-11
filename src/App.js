
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { Suspense } from 'react';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import SectionContact from './Components/SectionContact';
import SectionFixtureResult from './Components/SectionFixtureResult';
import SectionSponsors from './Components/SectionSponsors';
import SectionNewsUpdates from './Components/SectionNewsUpdates';
import SectionToofaniSquad from './Components/SectionToofaniSquad';
import SectionGallery from './Components/SectionGallery';
import SectionNewsLetter from './Components/SectionNewsLetter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path='/' element={
            <Suspense fallback={<div>Components are loading please wait....</div>}
            >
              <Home/>
            </Suspense>
          }
          />
          <Route path="/About" Component={AboutUs} />
          <Route path='/News-Updates' Component={SectionNewsUpdates}/>
          <Route path='/Squad' Component={SectionToofaniSquad}/>
          <Route path="/Fixture-Result" Component={SectionFixtureResult} />
          <Route path='/Gallery' Component={SectionGallery}/>
          <Route path='/Newsletter' Component={SectionNewsLetter}/>
          <Route path='/Sponsors' Component={SectionSponsors} />
          <Route path="/Contact" Component={SectionContact} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
