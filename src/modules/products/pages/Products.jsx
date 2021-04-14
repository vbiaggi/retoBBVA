// import logo from './logo.svg';
// import '../styles/Products.css';

import { Button } from "@material-ui/core";

function Products() {
  return (
    <div className="Products">
      <header className="Products-header">
        {/* <img src={logo} className="Products-logo" alt="logo" /> */}
        <p>
          Edit <code>src/Products.js</code> and save to reload.
        </p>
        <a
          className="Products-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="primary">
          Primary
      </Button>
      </header>
    </div>
  );
}

export default Products;
