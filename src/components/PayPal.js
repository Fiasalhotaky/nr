import React, { useEffect, useRef, useContext, useState  } from 'react'
import { CartContext } from "../Global/CartContext";


export default function PayPal() {
    const paypal = useRef()

    const { shopingCart, cartDetails, totalPrice, qty, dispatch, item } = useContext(CartContext);
    console.log(shopingCart)

    let finalProducts = item;
    let finalCost = totalPrice + '.00'
        
        useEffect(()=> {
            window.paypal.Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: finalProducts,
                                amount: {
                                    currency_code: "USD",
                                    value: finalCost
                                },
                            },
                        ],
                    });
                },

                onApprove: async (data, actions) => {
                    const order = await actions.order.capture()
                    console.log(order)
                },
                
                onError: (err) => {
                    console.log(err)
                }
            })
            .render(paypal.current)
        }, [] )
    return(
        
        <div>
            <div ref={paypal}></div>
        </div>

    )
}