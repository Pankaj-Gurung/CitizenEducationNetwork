import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Study from './components/TopStudy/Study';
import Title from './components/Title/Title';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ChatBot from 'react-simple-chatbot';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auslanding from './components/Countries/Australia/Auslanding';
import FranceLanding from './components/Countries/France/FranceLanding';
import NetherlandsLanding from './components/Countries/Netherlands/NetherlandsLanding';
import UKLanding from './components/Countries/United Kingdom/UKLanding';
import USALanding from './components/Countries/United States of America/USALanding';
import CanadaLanding from './components/Countries/Canada/CanadaLanding';
import IrelandLanding from './components/Countries/Ireland/IrelandLanding';
import SingaporeLanding from './components/Countries/Singapore/SingaporeLanding';

import Aboutus from './components/Aboutus/Aboutus';


const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning! How can I assist you today?';
  if (hour < 18) return 'Good afternoon! How can I assist you today?';
  return 'Good evening! How can I assist you today?';
};

// HomePage component containing all the homepage components
const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Study />
    <div className="container">
      <Title subTitle="Testimonials" title="What Students Say" />
      <Testimonials />
      <Title subTitle="Contact Us" title="Get In Touch" />
      <Contact />
      <Footer />
    </div>
    <ChatBot
      steps={[
        {
          id: '1',
          message: getGreeting(),
          trigger: '2',
        },
        {
          id: '2',
          options: [
            { value: 'services', label: 'Learn about our services', trigger: '3' },
            { value: 'schedule', label: 'Schedule a consultation', trigger: '6' },
            { value: 'contact', label: 'Contact information', trigger: '9' },
            { value: 'restart', label: 'Restart the conversation', trigger: '1' },
          ],
        },
        {
          id: '3',
          message:
            'We offer a variety of services including study abroad programs, application assistance, and visa guidance. Please choose a specific service for more information.',
          trigger: '4',
        },
        {
          id: '4',
          options: [
            { value: 'study_abroad', label: 'Study Abroad Programs', trigger: '5' },
            { value: 'application', label: 'Application Assistance', trigger: '6' },
            { value: 'visa', label: 'Visa Guidance', trigger: '7' },
            { value: 'other', label: 'Other', trigger: '8' },
          ],
        },
        {
          id: '5',
          message:
            'Our study abroad programs help students explore educational opportunities in various countries. We offer guidance on choosing the right program, preparing applications, and securing scholarships. For more details, contact us at +977 9861854344.',
          trigger: '2',
        },
        {
          id: '6',
          message:
            'Application assistance includes help with preparing and submitting your application to educational institutions. We guide you through the entire process, from writing your statement of purpose to gathering recommendation letters. For further assistance, contact us at +977 9861854344.',
          trigger: '2', // Option to return to main menu
        },
        {
          id: '7',
          message:
            'Visa guidance covers the steps required to obtain a student visa for your chosen country. We provide support with documentation, application forms, and interview preparation. For more information, contact us at +977 9861854344.',
          trigger: '2',
        },
        {
          id: '8',
          message:
            'If you have other inquiries or need assistance with a specific request, please let us know. We are here to help with any questions you may have. For more information, contact us at +977 9861854344.',
          trigger: '2',
        },
        {
          id: '9',
          message:
            'You can fill the contact form or reach via calling us at +977 9861854344 for any queries or further information.',
          trigger: '2',
        },
      ]}
      floating={true}
    />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<HomePage />} />
        <Route path='/aboutus' element={<Aboutus/>}/>
        {/* Australia Route */}
        <Route path="/auslanding" element={<Auslanding />} />
        <Route path='/francelanding' element={<FranceLanding/>}/>
        <Route path='/canadalanding' element={<CanadaLanding/>}/>
        <Route path='/netherlandslanding' element={<NetherlandsLanding/>}/>
        <Route path='/uklanding' element={<UKLanding/>}/>
        <Route path='/usalanding' element={<USALanding/>}/>
        <Route path='/irelandlanding' element={<IrelandLanding/>}/>
        <Route path='/singaporelanding' element={<SingaporeLanding/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
