import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cart: {
        lineItems: []
      }
    }

    this.openCart = this.openCart.bind(this);
    this.closeCart = this.closeCart.bind(this);
  }

  componentWillReceiveProps(nextProps){
    // debugger;
    console.log(nextProps);
    this.setState({cart: nextProps.cart});
  }

  openCart(){
    $('.cart').addClass('js-active');
  }

  closeCart(){
    $('.cart').removeClass('js-active');
  }

  render() {
    const cartItems = this.state.cart.lineItems.map(item => {
      // debugger;
      console.log(item);
      return (
        <div className='cart-item'>
          <h3>{item.title}</h3>
        </div>
      )
    });

    return (
      <div>
        <button
          className="btn btn--cart-tab js-prevent-cart-listener"
          onClick={() => this.openCart()}>
          <span className="btn__counter"></span>
          <div xmlns="http://www.w3.org/2000/svg" className="icon-cart icon-cart--side"></div>
        </button>


        <div className="cart">

          <div className="cart-section cart-section--top">
            <h2 className="cart-title">Your cart</h2>
            <button
              className="btn--close"
              onClick={() => this.closeCart()}>
                <span>×</span>
                <span className="visuallyhidden">Close</span>
            </button>
          </div>

          <div className="cart-form">
            <div className="cart-item-container cart-section">
              {cartItems}
            </div>

            <div className="cart-bottom">
              <div className="cart-info clearfix cart-section">
                <div className="type--caps cart-info__total cart-info__small">Total</div>
                <div className="cart-info__pricing">
                  <span className="cart-info__small cart-info__total">USD</span>
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
