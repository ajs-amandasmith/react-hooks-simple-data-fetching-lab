// create your App component here

import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setDogImage(data.message);
        setIsLoaded(true);
      })
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div>
      <img alt="A Random Dog" src={dogImage}></img>
    </div>
  )}

export default App;
