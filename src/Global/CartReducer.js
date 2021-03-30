
export const CartReducer = (state, action) => {
    const { shopingCart, item, totalPrice, qty, size} = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    let updatedProducts= [];
    let updatedSize;
    switch (action.type) {
        case 'ADD_TO_CART':

            const check = shopingCart.filter((product) => product.id === action.product.id).filter((myproduct) => myproduct.item === action.product.item);
            if (check.length !== 0) {
                return state;
            }
            else {
                product = action.product;
                product["item"] = action.item;
                product['qty'] = 1;
                updatedProducts = item + action.item + ' ';
                updatedQty = qty + 1;
                updatedPrice = totalPrice + product.cost;
                
                
                return { shopingCart: [product, ...shopingCart], totalPrice: updatedPrice, qty: updatedQty, item: updatedProducts }
            }
            break;

        case 'INC':
            product = action.cart;
            product.qty = product.qty + 1;
            updatedPrice = totalPrice + product.cost;
            updatedQty = qty + 1;
            index = shopingCart.findIndex(cart => cart.id === action.id && cart.item === action.item);
            shopingCart[index] = product;
            return { shopingCart: [...shopingCart], totalPrice: updatedPrice, qty: updatedQty }
            break;
        case 'DEC':
            product = action.cart;
            if (product.qty > 1) {
                product.qty = product.qty - 1;
                updatedPrice = totalPrice - product.cost;
                updatedQty = qty - 1;
                let findProduct = shopingCart.find((test) => test.item === action.cart.item && test.id === action.cart.id);
                index = shopingCart.findIndex(cart => cart === findProduct);
                shopingCart[index] = product;
                return { shopingCart: [...shopingCart], totalPrice: updatedPrice, qty: updatedQty, item: updatedProducts }
            }
            else {
                updatedPrice = totalPrice - product.cost;
                updatedQty = qty - 1;
                shopingCart[index] = product;
                let findProduct = shopingCart.find((test) => test.item === action.cart.item && test.id === action.cart.id);
                let newFindProducts = shopingCart.filter((product) => product !== findProduct);
                return { shopingCart: [...newFindProducts], totalPrice: updatedPrice, qty: updatedQty, item: updatedProducts  };
            }
            break;

        case 'DELETE':
            let findProduct = shopingCart.find((test) => test.item === action.cart.item && test.id === action.cart.id);
            let newFindProducts = shopingCart.filter((product) => product !== findProduct);
            product = action.cart;
            updatedQty = qty - product.qty;
            updatedPrice = totalPrice - product.cost * product.qty;
            updatedProducts =  item + " | " + " removed: " + action.cart.item + " | ";
            return { shopingCart: [...newFindProducts], totalPrice: updatedPrice, qty: updatedQty, item: updatedProducts  }

            break;

            case 'SIZE':
                let findProductSize = shopingCart.find((test) => test.item === action.cart.item && test.id === action.cart.id);
            let newFindProductsSize = shopingCart.filter((product) => product == findProductSize || product !== findProductSize  );
            product = action.cart;
            updatedQty = qty;
            updatedPrice = totalPrice;
            updatedSize = action.size;
            updatedProducts =  item + " | " + action.cart.item  + ' size: ' +action.size + " | ";
            return { shopingCart: [...newFindProductsSize], totalPrice: updatedPrice, qty: updatedQty, item: updatedProducts, size: updatedSize}

            break;
                
                


        default:
            return state
    }
}