import React, { Component, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core';
import {DataProvider} from './Context'

class Home extends Component {
    render() {

        

        
        /*
        const database = ([
            {
                    name: 'NY Jeans',
                    cost: '$150.00',
                    id: '1',
                    colors: ["Black", "Blue"]
                },


                {
                    name: 'LA Jeans',
                    cost: '$150.00',
                    id: '2'
                },

                {
                    name: 'Mind Your Business Hoodie',
                    cost: '$100.00',
                    id: '3',
                    colors: ["Black", "Green"]
                }

        ]) 
        */
        return(
            
            <div className= "landing-grid">
                 <img src="https://raw.githubusercontent.com/Fiasalhotaky/nr/main/NR%20BLACK%20PRIMARY%20.png" alt="" 
                 style={{height: '100px'}} />

                <h1 style={{paddingTop: '0em'}}>Catalog</h1>
                <Grid container spacing = {3} direction = 'row' justify = 'space-between'>
                <Grid item  xs={6} >
               <Card style={{width: '350px', height: '380px', paddingTop: '0em'}} >
                <CardActionArea  >
                    <CardMedia 
                    component="img"
                    alt="Persian Rugz"
                    height="250"
                    image="https://raw.githubusercontent.com/Fiasalhotaky/nr/main/prugz.PNG"
                    title="Persian Rugz"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Persian Rugz
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        $50.00
                    </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" style={{background: "black", color: "white", display: "block", cursor: "pointer", width: "100%"}}>
                    ADD TO CART
                    </Button>
                </CardActions>
                </Card>
                </Grid>


                <Grid item  xs={6} >
                <Card style={{width: '350px', height: '400px', paddingTop: '0em'}} >
                <CardActionArea  >
                    <CardMedia 
                    component="img"
                    alt="New York Jeans Black"
                    height="280"
                    image="https://raw.githubusercontent.com/Fiasalhotaky/nr/main/nr%20jeans%20blk.JPG"
                    title="New York Jeans Black"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    New York Jeans Black
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        $150.00
                    </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" style={{background: "black", color: "white", display: "block", cursor: "pointer", width: "100%"}}>
                    ADD TO CART
                    </Button>
                </CardActions>
                </Card>
                </Grid>

                <Grid item  xs={6} >
                <Card style={{ width: '350px', height: '400px', paddingTop: '0em', minWidth: "300px"}} >
                <CardActionArea  >
                    <CardMedia 
                    component="img"
                    alt="New York Jeans Blue"
                    height="280"
                    image="https://raw.githubusercontent.com/Fiasalhotaky/nr/main/nr%20jeans%20blue.JPG"
                    title="New York Jeans Blue"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    New York Jeans Blue
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        $50.00
                    </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" style={{background: "black", color: "white", display: "block", cursor: "pointer", width: "100%"}}>
                    ADD TO CART
                    </Button>
                </CardActions>
                </Card>
                </Grid>

                </Grid>
            </div>
            
        )
    }
}

export default Home;