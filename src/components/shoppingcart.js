import React, { useContext, useState } from 'react'
import { CartContext } from "../Global/CartContext";
import { Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import DeleteIcon from '@material-ui/icons/Delete';
import {  Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import PayPal from './PayPal';
// import StripeCheckout from 'react-stripe-checkout'


export const ShoppingCart = (state) => {
 const [sizeState, setSizeState] = useState('');
  const { shopingCart, totalPrice, qty, dispatch, item, size } = useContext(CartContext);
  const [checkout, setCheckOut] = useState(false)
 
  

  

console.log(shopingCart)
  return (
    <>
    
    <div className="app">
            <Layout>
                <Header title="No Reservations" style={{ background: 'black' }} scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/shoppingcart">Shopping Cart</Link>
                        <Link to="/instagram">Instagram</Link>
                        {/* {checkout ? (
                            <PayPal />

                        ) : (

                                <button onClick={() => {
                                    setCheckOut(true);
                                }}
                                >
                                    Checkout
                                </button>

                                

                            )} */}


                    </Navigation>
                </Header>
                <Drawer className='drawer' title="No reservations" style={{ position: "fixed", display: "flex", flexDirection: "column" }}>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/shoppingcart">Shopping Cart ({shopingCart.length}) </Link>
                        <Link to="/instagram">Instagram</Link>
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
                
                
                <div className='container-fluid '>
        <div >
          <div  style={{ display: 'grid', justifyContent: 'center' }}>

          <Link  style={{color: 'black', textAlign: 'right', fontSize: '15px', paddingRight: '2em', paddingBottom: '1em', paddingTop: '0.5em'}} to="/"> MAIN </Link>

          <img src="https://raw.githubusercontent.com/Fiasalhotaky/nr/main/NR%20BLACK%20PRIMARY%20.png" alt=""
                            style={{ paddingLeft: '3em', paddingRight: '3em', height: '40px', width: '250px', justifyContent: 'center', textAlign: 'center', background: 'white', alignItems: 'center', justify: 'center' }} />

          <hr style={{borderTop: '2px solid black', paddinTop: '0.01em'}}/>

            {
              shopingCart.length > 0 ?
                shopingCart.map(
                  cart => (
                    
                  <div className='cart' key={cart.id+cart.item}>
                    <span className='cart-image'><img src={cart.image} alt='not found' /></span>
                    <span className='cart-product-name'> {cart.name} </span>
                    <span className='cart-product-name'> {cart.size} </span>
                    <span style={{textAlign: 'left', fontWeight: 'bold'}} >${cart.cost * cart.qty}.00</span>

                    <label>SIZE</label>

                    {cart.id != 3 ?
                    <div>
                    <select className= 'selectOption'onChange={(e) => {
                      const selectedSize= e.target.value;
                       setSizeState(selectedSize)
                       const val = e.target.value;
                      dispatch({ type: 'SIZE', id: cart.id, cart, size: val })
                    }} >
                    <option value="S" selected="selected" >S</option>
                    <option value="M">M</option>
                    <option value="L"  >L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    </select> 
                   
                    {
                      
                    }
                      </div>
                    
                    : <select id='main' className= 'selectOption' onChange={(e) => {
                      const selectedSize= e.target.value;
                       setSizeState(selectedSize)
                       const val = e.target.value;
                      dispatch({ type: 'SIZE', id: cart.id, cart, size: val })
                    }}>
                      <option value="6" selected="selected" >6</option>
                      <option value="6.5">6.5</option>
                      <option value="7">7</option>
                      <option value="7.5">7.5</option>
                      <option value="8"  >8</option>
                      <option value="8.5">8.5</option>
                      <option value="9">9</option>
                      <option value="9.5">9.5</option>
                      <option value="10">10</option>
                      <option value="10.5">10.5</option>
                      <option value="11">11</option>
                      <option value="11.5">11.5</option>
                      <option value="12">12</option>
                      <option value="12.5">12.5</option>
                      <option value="13">13</option>
                      </select>
                      
                      
                    }
                    
                    <span style={{textAlign: 'right', color: 'gray'}} onClick={() => dispatch({ type: 'DELETE', id: cart.id, cart })}> remove </span>
                  </div>
                ))
                : 'CART IS EMPTY'
            }
          </div>
          {
            shopingCart.length > 0 ? <div className='cart'>
              <div className='summary'>
                <h3>Cart Summary</h3>
                <div className='total-items'>
                <div className='items'>Product Names </div>
                <div className='items-count'>{item}</div>
                  <div className='items'>Total Items </div>
                  <div className='items-count'>{qty}</div>
                </div>
                <div className ='total-price-section'>
                <div className='just-title'>SUBTOTAL</div>
                <div className ='items-price'>${totalPrice}.00 </div>
              </div>
              <div className ='stripe-section'>

              {checkout ? (
                            <PayPal />

                        ) : (
                                <button onClick={() => {
                                    setCheckOut(true);
                                }}
                                className="checkout-btn"
                                >
                                    Checkout
                                </button>

                            )}
                
              </div>
              </div>
            </div> : ''
          }
        </div>
      </div>
                </Content>

            </Layout>

        </div>
        </>
        
  )

}
export default ShoppingCart