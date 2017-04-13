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
        <div className='cart-item' key={item.id} >
          <img className='cart-item__img' src={item.image.src}></img>
          <div className='cart-item__content'>
            <div className='cart-item__variant-title'>{item.title}</div>
            <div className='cart-item__price'>{item.line_price}</div>
            <div className='cart-item__quantity-container'>
              <div className='cart-item__quantity'>{item.quantity}</div>
            </div>
          </div>
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
