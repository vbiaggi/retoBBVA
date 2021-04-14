import React from 'react';
import '../styles/home.css';

import { Button } from "@material-ui/core";

function Home(props) {
  const { history } = props;
  const goToLogin = () => history.push("/iniciar-sesion");
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
        <Button variant="contained" color="primary" onClick={goToLogin}>
          Login
        </Button>
      </header>
    </div>
  );
}

export default Home;
