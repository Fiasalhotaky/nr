import React, {Component } from 'react'


export const DataContext = React.createContext();
export class DataProvider extends Component{

        state = {
            products: [
                    {
                    name: 'NY Jeans Black',
                    cost: '$150.00',
                    id: '1',
                    colors: ["Black", "Blue"]
                },


                {
                    name: 'LA Jeans Blue',
                    cost: '$150.00',
                    id: '3'
                },

                {
                    name: 'Mind Your Business Hoodie Black',
                    cost: '$100.00',
                    id: '4',
                    colors: ["Black", "Green"]
                }
            ]
        }
    rednder() {
        const{products} = this.state;
        return (
            <DataContext.Provider value= {{products}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}