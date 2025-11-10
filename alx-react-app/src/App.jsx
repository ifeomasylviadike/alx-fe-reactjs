import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>User Profiles</h1>
      <UserProfile 
        name="Alice"
        age={25}
        bio="Software engineer passionate about React and building user-friendly applications. Loves hiking and photography in her free time."
      />
      
      <UserProfile 
        name="Bob Smith"
        age={35}
        bio="Full-stack developer with 10 years of experience. Enjoys teaching coding and contributing to open-source projects."
      />
      </div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile />
      <Footer />
    </>
  )
}

export default App
