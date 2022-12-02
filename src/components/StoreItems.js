export default  function StoreItems(props) {
    const item = props.item;
    const updateCart = props.updateCart;
    const cart = props.cart;
    const addToCart = () => {
        updateCart([...cart, item]);
    }
    const removeFromCart = (name) => {
        const newCart = cart.filter((item) => item.name !== name);
        updateCart([...newCart]);
    }


    return (
        <div className="item-box">
            <p> {item.name} ${item.price} <br></br> 
            Brand: {item.brand} <br></br>
            Sport: {item.sport} <br></br>
            <button onClick={addToCart}>Add to Cart</button>
            <button onClick={() => {removeFromCart(item.name)}}>Remove From Cart</button>
            </p>

            <img src = {item.image}></img>
        </div>

    );
}