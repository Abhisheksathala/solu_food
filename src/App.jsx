import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Shopretail from './pages/Shopretail';
import { Routes, Route } from 'react-router-dom';
import UserAuthpage from './pages/UserAuthpage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Aboutus from './pages/Aboutus';
import Pagenotfound from './pages/Pagenotfound';
import Contactus from './pages/Contactus';
import { Toaster } from 'react-hot-toast';
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
          <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="termsandconditions" element={<TermsAndConditions />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="contact" element={<Contactus />} />
          <Route path="*" element={<Pagenotfound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
