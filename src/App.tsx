import './App.scss';
import WeatherWidget from './Components/WeatherWidget';
import WeatherForm from './Components/WeatherForm';
import React, { useState } from 'react';

function App() {
  const [cityState, setCityState] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCityState(e.target.city.value)
  }

  return (
    <div className="App">
      <WeatherForm handleSubmit={handleSubmit} />
      <WeatherWidget city={cityState} />
    </div>
  );
}

export default App
