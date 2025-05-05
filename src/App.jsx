import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Shopretail from './pages/Shopretail';
import { Routes, Route } from 'react-router-dom';
import UserAuthpage from './pages/UserAuthpage';
import toast, { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path="signin" element={<UserAuthpage type="signin" />} />
          <Route path="signup" element={<UserAuthpage type="signup" />} />
          <Route path="shopretail" element={<Shopretail />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
