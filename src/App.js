import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import BlogPost from "./components/BlogPost";
import Blog from "./components/Blog";
import ProgrammingPost from "./components/ProgrammingPost";
import Programming from "./components/Programming";
import './App.css';
import insta from './assets/instagram-icon.ico';
import twitter from './assets/twitter-icon.ico';
import fb from './assets/facebook-icon.ico';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={BlogPost} path='/blog/:slug' />
        <Route component={Blog} path='/blog' />
        <Route component={ProgrammingPost} path='/programming/:slug' />
        <Route component={Programming} path='/programming' />
      </Switch>
      <footer>
        <h1>Reach out to me on:</h1>
        <div class="social-icons">
          <a href="https://www.instagram.com/_fahim_faisal"><img class="social-icon" src={insta} alt="Instagram" /></a>
          <a href="https://www.facebook.com/fahim.faisal.334"><img class="social-icon" src={fb} alt="Facebook"/></a>
          <a href="https://twitter.com/ProgrammerFahim"><img class="social-icon" src={twitter} alt="Twitter" /></a>
        </div>
        <small>Copyright © 2021</small>  
      </footer>
    </BrowserRouter>
  );
}

export default App;
