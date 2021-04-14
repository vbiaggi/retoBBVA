import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import '../styles/Login.css';
import { Typography, FormControl, InputLabel, Select, MenuItem, TextField, Paper, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <div className="Login">
      <Grid container alignContent="center" alignItems="center">
        <Grid item lg={2}>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <br /><br />
              <Typography variant="h4" gutterBottom>
                ¡Bienvenido!
              </Typography>
            </Grid>
            <Grid item xs={3} lg={5}>
              <FormControl autoWidth variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">Tipo de documento</InputLabel>
                <Select
                  autoWidth
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value=""
                  onChange={() => { }}
                >
                  <MenuItem value={1}>DNI</MenuItem>
                  <MenuItem value={2}>RUC</MenuItem>
                  <MenuItem value={3}>Pasaporte</MenuItem>
                  <MenuItem value={4}>Carnet de extranjería</MenuItem>
                  <MenuItem value={5}>Carnet identidad militar</MenuItem>
                  <MenuItem value={6}>Carnet diplomático</MenuItem>
                  <MenuItem value={7}>Partida de nacimiento</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3} lg={7}>
              <FormControl variant="filled" className={classes.formControl}>
                <TextField id="filled-basic" label="Documento" variant="filled" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Para una mejor personalizacion ingresa con todas redes sociales
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3} alignContent="center" alignItems="center">
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Google
                </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    Facebook
                </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    Instagram
                </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>





    </div >
  );
}

export default Login;
