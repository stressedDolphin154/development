export default  function StoreItems(props) {
    const cart = props.cart;
    const totalPrice = props.totalPrice;
   
    return (
        <div className="cart">
        {cart.map(item => <p>{item.name} {item.price}</p>)}
        <h3>Total Price = ${totalPrice}</h3>
      </div>

    );
}