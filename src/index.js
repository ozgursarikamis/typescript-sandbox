const cart = [];

function log(message) {
    console.log(message + message);
}

function addToCart(item) {
    cart.push(item);
    log('Item added to cart', item);
}

function removeFromCart(idx) {
    cart.splice(cart.indexOf(idx), 1);
    log('Item removed from cart', idx);
}

function addToCart(item) {
    addToCart(item);
    log('Item added to cart', item);
}

addToCart('Apple');