import React, { useEffect, useState } from "react";
import {Loader} from 'react-loaders';

import {
  Header,
  Templates,
  Intro,
  OurServices,
  Instagram,
  Footer,
} from './containers';

import {Navbar} from './components';
import "./App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=> {
      setIsLoading(false);
    }, 2000)
  },[])

  return (
    <div className="App ">
        <Navbar />
        <Header />
        <Templates />
        <Intro />
        <OurServices />
        <Instagram />
        <Footer />
        {
          isLoading && <Loader type="pacman"/>
        }

    </div>
  );
}

export default App;
