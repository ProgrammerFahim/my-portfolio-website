import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import BlogPost from "./components/BlogPost";
import Blog from "./components/Blog";
import ProgrammingPost from "./components/ProgrammingPost";
import Programming from "./components/Programming";
import './App.css';
import insta from './assets/insta.svg';
import twitter from './assets/twitter.svg';
import fb from './assets/fb.svg';

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
          <img class="social-icon" src={insta} alt="Instagram" />
          <img class="social-icon" src={fb} alt="Facebook"/>
          <img class="social-icon" src={twitter} alt="Twitter" />
        </div>
        <small>Copyright 2021</small>  
      </footer>
    </BrowserRouter>
  );
}

export default App;
