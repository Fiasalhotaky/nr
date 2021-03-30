import React, { createContext } from 'react'
import { useState } from 'react';


export const ProductContext = createContext();

export const ProductsContextProvider = (props) => {
    const [products] = useState({
        lajeans: [
            {
                name: "LA Jeans",
                cost: 150.00,
                id: '1',
                colors: ["Black", "Blue"],
                image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/laj1.JPG",
                size: ''
            }
        ],
        

        nyForces: [
            {
                name: "NY Forces",
                cost: 120.00,
                id: '3',
                colors: ["White"],
                image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/nyforces.jpg",
                size: ''

            }
        ],

        ny: [
            {
                name: "NY Jeans",
                cost: 150.00,
                id: '2',
                colors: ["Black", "Blue"],
                image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/nr%20jeans%20blk.JPG",
                size: ''
            }

        ],

        hoodie: [
            {
                name: ' MYB Hoodie Black',
                cost: 100.00,
                id: '4',
                colors: ["Black", "Green", "White", "Red"],
                image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/myb%20hoodie.JPG",
                size: ''

            }
        ],
        sweatpants: [
            {
                name: ' Ny Sweatpants ',
                cost: 100.00,
                id: '5',
                colors: ["Gray"],
                image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/nysweatpants.jpg",
                size: 'S, M, L, XL'

            }
        ]
    });
    return (
        <ProductContext.Provider value={{ products: {...products} }}>
            { props.children }
        </ProductContext.Provider >
    )
}