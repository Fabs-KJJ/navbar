import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from './MainSection';
import Footer from './Footer';

function App() {
  return (
    <div>
      <NavigationBar />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
