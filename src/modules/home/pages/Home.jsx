import React from 'react';
import '../styles/home.css';
import Carousel from 'react-material-ui-carousel'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Banner from '../assets/images/banner.png'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    color: '#ffffff',
    height: 400,
    marginTop: 20,
  },
});

function Example(props)
{
  const { history } = props;
  
    var items = [
        {
            name: "Créditos al alcance de todos",
            description: "Accede con tu cuenta de facebook y mira los beneficios que tenemos para ti"
        },
        {
            name: "La nueva APP del BBVA",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} history={history}/> )
            }
        </Carousel>
    )
}

function Item(props)
{
  const classes = useStyles();
  const { history } = props;
  const goToLogin = () => history.push("/iniciar-sesion");
    return (
      <Grid content xs={12} sm={12} md={12} lg={12}>
      <Card item lg={12}>
        <CardActionArea>
          <CardMedia className={classes.media}
          image={Banner}
          // title="Contemplative Reptile"
          >
            <CardContent>
              <h4 className={classes.media}>
              {props.item.name}
              <br></br>
              {props.item.description}
              </h4>
            

              <Button className="CheckButton">
                  Check it out!
              </Button>
              </CardContent>
          </CardMedia>
          </CardActionArea>
        </Card>
        <Button variant="contained" color="primary" onClick={goToLogin}>
          Quiero evaluarme!!
        </Button>
        </Grid>
    )
}

export default Example;
