import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TicketCard from './components/TicketCard';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Ticket Dashboard</h1>
      <TicketCard 
        title="Fix Docker Path Error" 
        status="In Progress" 
        priority="High" 
      />
      <TicketCard 
        title="Update README" 
        status="Open" 
        priority="Low" 
      />
    </div>
  );
}

export default App;