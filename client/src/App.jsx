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

// Helper function to get a personalized greeting based on the time of day
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning! How can I assist you today?';
  if (hour < 18) return 'Good afternoon! How can I assist you today?';
  return 'Good evening! How can I assist you today?';
};

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Study/>
      <div className='container'>
        <Title subTitle='Testimonials' title='What Students Say' />
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get In Touch' />
        <Contact/>
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
                { value: 'restart', label: 'Restart the conversation', trigger: '1' }, // Option to restart
              ],
            },
            {
              id: '3',
              message: 'We offer a variety of services including study abroad programs, application assistance, and visa guidance. Please choose a specific service for more information.',
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
              message: 'Our study abroad programs help students explore educational opportunities in various countries. We offer guidance on choosing the right program, preparing applications, and securing scholarships. For more details, contact us at +977 9861854344.',
              trigger: '2', // Option to return to main menu
            },
            {
              id: '6',
              message: 'Application assistance includes help with preparing and submitting your application to educational institutions. We guide you through the entire process, from writing your statement of purpose to gathering recommendation letters. For further assistance, contact us at +977 9861854344.',
              trigger: '2', // Option to return to main menu
            },
            {
              id: '7',
              message: 'Visa guidance covers the steps required to obtain a student visa for your chosen country. We provide support with documentation, application forms, and interview preparation. For more information, contact us at +977 9861854344.',
              trigger: '2', // Option to return to main menu
            },
            {
              id: '8',
              message: 'If you have other inquiries or need assistance with a specific request, please let us know. We are here to help with any questions you may have. For more information, contact us at +977 9861854344.',
              trigger: '2', // Option to return to main menu
            },
            {
              id: '9',
              message: 'You can fill the contact form or reach via calling us at +977 9861854344 for any queries or further information.',
              trigger: '2', // Option to return to main menu
            },
            {
              id: '12',
              message: 'For educational resources, please visit our resources page here: [Resources Link]. This page contains valuable information to aid your educational journey. Is there anything else I can assist you with?',
              trigger: '2', // Option to return to main menu
            },
            {
              id: '15',
              message: 'Was this information helpful?',
              options: [
                { value: 'yes', label: 'Yes', trigger: '16' },
                { value: 'no', label: 'No', trigger: '17' },
                { value: 'restart', label: 'Restart the conversation', trigger: '1' }, // Option to restart
              ],
            },
            {
              id: '16',
              message: 'Great! If you have any more questions or need further assistance, feel free to ask.',
              trigger: '2', // Option to return to main menu
            },
            {
              id: '17',
              message: 'Sorry to hear that. Can you provide more details on how we can improve?',
              user: true,
              trigger: '18',
            },
            {
              id: '18',
              message: 'Thank you for your feedback. We will use it to enhance our services.',
              trigger: '2', // Option to return to main menu
            },
            {
              id: '19',
              message: 'You can learn more about studying in different countries below. Please select a country:',
              trigger: '20',
            },
            {
              id: '20',
              options: [
                { value: 'usa', label: 'United States of America', trigger: '21' },
                { value: 'uk', label: 'United Kingdom', trigger: '22' },
                { value: 'france', label: 'France', trigger: '23' },
                { value: 'canada', label: 'Canada', trigger: '24' },
                { value: 'australia', label: 'Australia', trigger: '25' },
                { value: 'other', label: 'Other', trigger: '26' },
              ],
            },
            {
              id: '21',
              message: 'The United States offers diverse educational opportunities with its world-renowned universities. Students can choose from a range of programs across various fields. The US education system is flexible and allows students to tailor their courses according to their interests. For more details, contact us at +977 9861854344.',
              trigger: '2', // Option to return to main menu
            },
            {
              id: '22',
              message: 'The United Kingdom is known for its prestigious universities and rich history in education. It offers a variety of programs from undergraduate to doctoral levels. The UK education system emphasizes critical thinking and research. For more details, contact us at +977 9861854344.',
              trigger: '2', // Option to return to main menu
            },
            {
              id: '23',
              message: 'France is renowned for its high-quality education and cultural richness. It provides a range of programs, particularly strong in arts, humanities, and business. French universities are known for their innovation and research opportunities. For more details, contact us at +977 9861854344.',
              trigger: '2', // Option to return to main menu
            },
            {
              id: '24',
              message: 'Canada is recognized for its friendly environment and high standard of education. Canadian universities offer a diverse range of programs and are known for their research facilities. The country is also renowned for its quality of life. For more details, contact us at +977 9861854344.',
              trigger: '2', // Option to return to main menu
            },
            {
              id: '25',
              message: 'Australia offers a vibrant education system with a focus on practical learning and research. Its universities are known for their strong global rankings and diverse programs. Students benefit from a balanced lifestyle and supportive environment. For more details, contact us at +977 9861854344.',
              trigger: '2', // Option to return to main menu
            },
            {
              id: '26',
              message: 'If you are interested in studying in a country not listed here, please let us know your preference. We can provide specific information and guidance for your chosen location. For more details, contact us at +977 9861854344.',
              trigger: '2', // Option to return to main menu
            },
          ]}
          floating={true}
        />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
