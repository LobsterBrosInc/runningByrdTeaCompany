import React from 'react';
import ShoppingCartItem from './shopping_cart_item';

class ShoppingCart extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cart: {
        lineItems: [],
        lineItemCount: 0
      }
    }

    this.openCart = this.openCart.bind(this);
    this.closeCart = this.closeCart.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
  }

  componentWillReceiveProps(nextProps){
    // debugger;
    this.setState({cart: nextProps.cart});
  }

  openCart(){
    $('.cart').addClass('js-active');
  }

  closeCart(){
    $('.cart').removeClass('js-active');
  }

  incrementQuantity(variantId){
    this.props.addSingleQuantityToCart(variantId);
  }

  decrementQuantity(variantId){
    this.props.removeSingleQuantityFromCart(variantId);
  }

  render() {
    const cartItems = this.state.cart.lineItems.map((item,idx) => {
      // debugger;
      // console.log(item);
      return (
        <ShoppingCartItem
          key={idx}
          itemInfo={item}
          incrementQuantity={() => this.incrementQuantity(item.product_id)}
          decrementQuantity={() => this.decrementQuantity(item.product_id)} />
      )
    });

    return (
      <div>
        <button
          className="btn btn--cart-tab js-prevent-cart-listener"
          onClick={() => this.openCart()}>
          <span className="btn__counter">{this.state.cart.lineItemCount}</span>
          <div xmlns="http://www.w3.org/2000/svg" className="icon-cart icon-cart--side"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="shopify-buy__icon-cart shopify-buy__icon-cart--side" data-element="toggle.icon" viewBox="0 0 25 25" enableBackground="new 0 0 25 25"><g className="shopify-buy__icon-cart__group"><path d="M24.6 3.6c-.3-.4-.8-.6-1.3-.6h-18.4l-.1-.5c-.3-1.5-1.7-1.5-2.5-1.5h-1.3c-.6 0-1 .4-1 1s.4 1 1 1h1.8l3 13.6c.2 1.2 1.3 2.4 2.5 2.4h12.7c.6 0 1-.4 1-1s-.4-1-1-1h-12.7c-.2 0-.5-.4-.6-.8l-.2-1.2h12.6c1.3 0 2.3-1.4 2.5-2.4l2.4-7.4v-.2c.1-.5-.1-1-.4-1.4zm-4 8.5v.2c-.1.3-.4.8-.5.8h-13l-1.8-8.1h17.6l-2.3 7.1z"></path><circle cx="9" cy="22" r="2"></circle><circle cx="19" cy="22" r="2"></circle></g></svg>
        </button>


        <div className="cart">

          <div className="cart-section cart-section--top">
            <div className="cart-title">Your cart</div>
            <button
              className="btn--close"
              onClick={() => this.closeCart()}>
                <span>×</span>
            </button>
          </div>

          <div className="cart-items-and-bottom-container">

            <div className="cart-form">
              <div className="cart-item-container cart-section">
                {cartItems}
              </div>

            </div>

            <div className="cart-bottom">
              <div className="cart-info clearfix cart-section">
                <div className="type--caps cart-info__total cart-info__small">Total</div>
                <div className="cart-info__pricing">
                  <span className="cart-info__small cart-info__total">${this.state.cart.subtotal} USD</span>
                  <span className="pricing pricing--no-padding"></span>
                </div>
              </div>
              <div className="cart-actions-container cart-section type--center">
                <div className="cart-discount-notice cart-info__small">Shipping and discount codes are added at checkout.</div>
                <input type="submit" className="btn btn--cart-checkout" id="checkout" name="checkout" value="Checkout" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
