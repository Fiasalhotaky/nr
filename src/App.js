import React, { useContext, useState } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import PayPal from './components/PayPal'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { FaInstagram, FaShoppingCart, FaEnvelope } from "react-icons/fa"

import { CartContext } from "./Global/CartContext";
import { ProductContext } from './Global/ProductsContext';


function App() {
    //position: "fixed", display: "flex", flexDirection: "column"
    const { products } = useContext(ProductContext);
    const { dispatch,shopingCart } = useContext(CartContext);
    const [checkout, setCheckOut] = useState(false)
    const [cart, setCart] = useState([]);


    const add1ToCart = (lajeans) => {
        dispatch({ type: "ADD_TO_CART", product: lajeans, item:"lajeans"})
        // setCart([...cart, lajeans]);
    }


    const add2ToCart = (ny) => {
        dispatch({ type: "ADD_TO_CART", product: ny, item:"ny"})
        // setCart([...cart, ny]);
    }

    const add3ToCart = (nyForces) => {
        dispatch({ type: "ADD_TO_CART", product: nyForces, item:"nyForces"})
        // setCart([...cart, ny]);
    }


    // const hoodie = ([
    //     {
    //         name: ' MYB Hoodie Black',
    //         cost: 100.00,
    //         id: '3',
    //         colors: ["Black", "Green"]
    //     }

    // ])

    const add4ToCart = (hoodie) => {
        dispatch({ type: "ADD_TO_CART", product: hoodie, item:"hoodie"})
        // setCart([...cart, hoodie]);
    }

    return (


        <div className="app">
            <Layout>
                <Header title="No Reservations" style={{ background: 'black' }} scroll>
                    <Navigation >
                        <Link to="/">Home</Link>
                        <Link to="/shoppingcart">Shopping Cart</Link>
                        {/* 
                        
                            <Link 
                                activeClass="active"
                                to="seaction1"
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                >
                        
                        */}


                    </Navigation>
                </Header>
                <Drawer className='drawer' title="No reservations" style={{ position: "fixed", display: "flex", flexDirection: "column" }}>
                    <Navigation >
                        <Link to="/">Home</Link>
                        <Link to="/shoppingcart">Shopping Cart ({shopingCart.length}) </Link>
                        {checkout ? (
                            <PayPal />

                        ) : (

                                <button onClick={() => {
                                    setCheckOut(true);
                                }}
                                >
                                    Checkout
                                </button>

                            )}
                    </Navigation>
                </Drawer>
                <Content>

                    <div className="page-content" />

                    <div className="landing-grid" >

                    <Link style={{color: 'black', textAlign: 'right', fontSize: '20px', paddingRight: '1em', paddingTop: '1em'}} to="/shoppingcart"> <FaShoppingCart/> ({shopingCart.length}) </Link>

                        <img src="https://raw.githubusercontent.com/Fiasalhotaky/nr/main/NR%20BLACK%20PRIMARY%20.png" alt=""
                            style={{ paddingLeft: '3em', paddingRight: '3em', height: '50px', width: '375px', justifyContent: 'center', textAlign: 'center', background: 'white', alignItems: 'center', justify: 'center' }} />

                        <hr style={{borderTop: '2px solid black'}}/>

                        <h1 style={{ paddingTop: '0em', fontSize: '40px', color: 'white' }}>Catalog</h1>

                        <div className="scrollTo" style={{ fontSize: '20px'}}>

                            <a style={{color: 'white'}} href="#sectionLA"> LA </a>

                            <p style={{paddingLeft: "5px", paddingRight: "5px", fontSize: "40px"}}> | </p>

                            <a style={{color: 'white'}} href="#sectionNy"> NY  </a>

                            <p style={{paddingLeft: "5px", paddingRight: "5px", fontSize: "40px"}}> | </p>

                            <a style={{color: 'white'}} href="#sectionSweatpants" > Sweatpants </a>

                            <p style={{paddingLeft: "5px", paddingRight: "5px", fontSize: "40px"}}> | </p>

                            <a style={{color: 'white'}} href="#sectionHoodies"> Hoodies </a>
                            

                        </div>

                        <Grid container direction='column' justify="center" alignItems="center" position="fixed" display="flex">

                                <h2 id="sectionLA" style={{ padding: '0em', fontSize: '40px', color: 'white' }}>LA Collection</h2>

                            <Grid item xs={12} >
                                {products.lajeans.map((product, idx) => (
                                    <Card style={{ width: '300px', height: '400px', paddingTop: '0em', paddingBottom: '0em' }} key={idx} >
                                        <CardActionArea  >
                                            <CardMedia
                                                component="img"
                                                alt={product.name}
                                                height="280"
                                                image={product.image}
                                                title={product.name}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">{product.name}</Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    ${product.cost}
                                                </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button onClick={() => add1ToCart(product)} size="small" style={{ background: "black", color: "white", display: "block", cursor: "pointer", width: "100%" }}>
                                                ADD TO CART
                    </Button>
                                        </CardActions>
                                    </Card>
                                ))}

                            </Grid>

                            <h4 id="sectionNy" style={{ paddingTop: '0em', fontSize: '40px', color: 'white' }}>NY Collection</h4>

                        <Grid item xs={12} style={{ width: '300px', height: '400px', paddingTop: '0em' }}  >
                            {products.ny.map((ny, idx) => (
                                <Card style={{ width: '300px', height: '400px', paddingTop: '0em' }} key={idx}  >
                                    <CardActionArea  >
                                        <CardMedia
                                            component="img"
                                            alt={ny.name}
                                            height="280"
                                            image={ny.image}
                                            title={ny.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            {ny.name}
                    </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                ${ny.cost}
                    </Typography>

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button onClick={() => add2ToCart(ny)} size="small" style={{ background: "black", color: "white", display: "block", cursor: "pointer", width: "100%" }}>
                                            ADD TO CART
                    </Button>
                                    </CardActions>
                                </Card>
                            ))}
                        </Grid>

                        <Grid item xs={12} style={{ width: '300px', height: '400px', paddingTop: '2em' }}  >
                            {products.nyForces.map((nyForces, idx) => (
                                <Card style={{ width: '300px', height: '400px', paddingTop: '0em' }} key={idx}  >
                                    <CardActionArea  >
                                        <CardMedia
                                            component="img"
                                            alt={nyForces.name}
                                            height="280"
                                            image={nyForces.image}
                                            title={nyForces.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            {nyForces.name}
                    </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                ${nyForces.cost}
                    </Typography>

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button onClick={() => add3ToCart(nyForces)} size="small" style={{ background: "black", color: "white", display: "block", cursor: "pointer", width: "100%" }}>
                                            ADD TO CART
                    </Button>
                                    </CardActions>
                                </Card>
                            ))}
                        </Grid>

                                

                        <h4 id="sectionHoodies" style={{ padding: '0.5em', fontSize: '40px', color: 'white' }}>Hoodies</h4>

                        <Grid item xs={12} style={{ width: '300px', height: '400px', paddingTop: '0em' }}  >
                            {/* <Card style={{ width: '350px', height: '400px', paddingTop: '0em', minWidth: "300px" }} >
                                <CardActionArea>
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
                                            $150.00
                    </Typography>

                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button onClick={() => add3ToCart(ny)} size="small" style={{ background: "black", color: "white", display: "block", cursor: "pointer", width: "100%" }}>
                                        ADD TO CART
                    </Button>
                                </CardActions>
                            </Card> */}

                            {products.hoodie.map((ny, idx) => (
                                <Card style={{ width: '300px', height: '400px', paddingTop: '0em' }} key={idx} >
                                    <CardActionArea  >
                                        <CardMedia
                                            component="img"
                                            alt={ny.name}
                                            height="280"
                                            image={ny.image}
                                            title={ny.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {ny.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                ${ny.cost}
                    </Typography>

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button onClick={() => add4ToCart(ny)} size="small" style={{ background: "black", color: "white", display: "block", cursor: "pointer", width: "100%" }}>
                                            ADD TO CART
                    </Button>
                                    </CardActions>
                                </Card>
                            ))}

                        </Grid>

                        <h4 id="sectionSweatpants" style={{ padding: '0.5em', fontSize: '40px', color: 'white' }}>Sweatpants</h4>

                        <Grid item xs={12} style={{ width: '300px', height: '400px', paddingTop: '0em' }}  >
                            {products.sweatpants.map((ny, idx) => (
                                <Card style={{ width: '300px', height: '400px', paddingTop: '0em' }} key={idx}  >
                                    <CardActionArea  >
                                        <CardMedia
                                            component="img"
                                            alt={ny.name}
                                            height="280"
                                            image={ny.image}
                                            title={ny.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            {ny.name}
                    </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                ${ny.cost}
                    </Typography>

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button onClick={() => add2ToCart(ny)} size="small" style={{ background: "black", color: "white", display: "block", cursor: "pointer", width: "100%" }}>
                                            ADD TO CART
                    </Button>
                                    </CardActions>
                                </Card>
                            ))}
                        </Grid>

                        <a style={{ paddingTop: '1em', fontSize: '30px', color: 'white' }}>Follow Us!</a>
                        <a href="https://www.instagram.com/noreservations.ny/?hl=en" rel="noopenner noreferrer" targets="_blank"
                            style={{fontSize: '40px', fontWeight: 'bold', color: 'white', padding: '0.5em', zIndex: '1' }}>
                            <FaInstagram/>
                              noreservations.ny
                        </a>

                        <a style={{ padding: '1em', fontSize: '30px', color: 'white' }} href="mailto:noreservations17@gmail.com">Contact Us <FaEnvelope/> </a>

                        <a style={{ padding: '1em', fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Copyright © 2020, Noreservations</a>


                        </Grid>

                    </div>
                </Content>

            </Layout>

        </div >
    );

}

export default App;
