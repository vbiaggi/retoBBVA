// import logo from './logo.svg';
import '../styles/Products.css';

//import { Button } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors'
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#6B8E23',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#556B2F',
      borderColor: '#556B2F',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#556B2F',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function FullWidthGrid() {
  const classes = useStyles();
  
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <Grid className="carta" container xs={6}>
        <Grid container item xs={4}>
          <Grid container item xs={12} justify="center" alignItems="center">
            <CreditCardIcon></CreditCardIcon>
          </Grid>
          <Grid container item xs={12} className='texto' justify="center" alignItems="center">
            Cuentas de ahorro
          </Grid>
        </Grid>
        <Grid container item xs={4} justify="center" alignItems="center"  className='texto'>
          Retira, transfiere, envía y recibe dinero gratis
        </Grid>
        <Grid item xs={4} sm={3}>
          <Grid container item xs={12} justify="center" alignItems="center" className="boton">
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
            Ábrela aquí
      </BootstrapButton>
          </Grid>
          <Grid container item xs={12} justify="center" alignItems="center" className="boton">
            <Button>Conoce más</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="carta" container xs={6}>
        <Grid container item xs={4}>
          <Grid container item xs={12} justify="center" alignItems="center">
            <CreditCardIcon></CreditCardIcon>
          </Grid>
          <Grid container item xs={12} className='texto' justify="center" alignItems="center">
            Tarjeta de crédito
          </Grid>
        </Grid>
        <Grid container item xs={4} justify="center" alignItems="center"  className='texto'>
          Pide tu tarjeta 100% online y empieza a comprar desde tu casa
        </Grid>
        <Grid item xs={4} sm={3}>
          <Grid container item xs={12} justify="center" alignItems="center" className="boton">
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
            Pídela aquí
      </BootstrapButton>
          </Grid>
          <Grid container item xs={12} justify="center" alignItems="center" className="boton">
            <Button>Conoce más</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default FullWidthGrid;
