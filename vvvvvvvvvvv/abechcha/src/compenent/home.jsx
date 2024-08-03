import React from 'react';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Categorie from './Categorie';
import FeedbackSection from './FeedbackSection';
import InfoSection from './InfoSection';
import Footer from './Footer';
import '../App.css'


const Home = () => {
  return (
    <div className="flex flex-col home ">
      <Navbar />
    
        <Welcome />
       <Categorie />
        <FeedbackSection />
        <InfoSection />
      <Footer />
    </div>
  );
};

export default Home;