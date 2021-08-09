import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Error from './Pages/Error'
import TopBtn from './Component/TopBtn'
import Email from './Component/Email'
import Social from './Component/Social';
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Chat from './Component/Chat';
import SideScroller from './Component/SideScroller';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  })
  if (isLoading) {
    return(
      <div className="loader-container">
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    )
  }
  return (
    <Fade>
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
      <TopBtn />
      <Chat />
      <Social />
      <SideScroller />
      <Email />
    </Router>
    </div>
    </Fade>
  );
}

export default App;
