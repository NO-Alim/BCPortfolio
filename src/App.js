import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Error from './Pages/Error'
import TopBtn from './Component/TopBtn'
import Email from './Component/Email'

function App() {
  return (
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
      <Email />
    </Router>
    </div>
  );
}

export default App;
