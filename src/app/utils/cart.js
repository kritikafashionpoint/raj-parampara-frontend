const CART_KEY = "rajparampara_cart_important_cart_789456123789";

// Get Cart
export const getCart = () => {
    if (typeof window === "undefined") return [];

    const cart = localStorage.getItem(CART_KEY);

    return cart ? JSON.parse(cart) : [];
};

// Save Cart
export const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Add To Cart
export const addToCart = (product) => {

    const cart = getCart();

    const existingIndex = cart.findIndex(
        (item) => item.id === product.id
    );

    if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
        });
    }

    saveCart(cart);

    return cart;
};

// check is in cart
export const isInCart = (productId) => {
    const cart = getCart();
    return cart.some((item) => item.id === productId);
};

// Remove Item
export const removeFromCart = (productId) => {
    const cart = getCart().filter(
        (item) => item.id !== productId
    );

    saveCart(cart);

    return cart;
};

// Update Quantity
export const updateQuantity = (productId, quantity) => {
    const cart = getCart().map((item) =>
        item.id === productId
            ? { ...item, quantity }
            : item
    );

    saveCart(cart);

    return cart;
};

// Clear Cart
export const clearCart = () => {
    localStorage.removeItem(CART_KEY);
};

// Total Items
export const getTotalItems = () => {
    return getCart().reduce(
        (total, item) => total + item.quantity,
        0
    );
};

// Total Price
export const getTotalPrice = () => {
    return getCart().reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
};