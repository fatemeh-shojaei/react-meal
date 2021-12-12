import React from 'react';
import MainHeader from "./components/MainHeader/MainHeader";
import Image from "./components/Image/Imge";
import Meal from './components/meal/meal';


function App() {
  return (
    <div className="App">
      <Image />
      <Meal />
      <MainHeader />
    </div>
  );
}

export default App;
