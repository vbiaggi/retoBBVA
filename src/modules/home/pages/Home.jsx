// import logo from './logo.svg';
import '../styles/home.css';

import { Button } from "@material-ui/core";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        {/* <img src={logo} className="Home-logo" alt="logo" /> */}
        <p>
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained" color="primary">
  Primary
</Button>
      </header>
    </div>
  );
}

export default Home;
