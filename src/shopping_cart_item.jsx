import React from 'react';

class ShoppingCartItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='cart-item' key={this.props.itemInfo.id} >
        <img className='cart-item__img' src={this.props.itemInfo.image.src}></img>
        <div className='cart-item__content'>
          <div className='cart-item__content-row'>
            <div className='cart-item__title'>{this.props.itemInfo.title}</div>
            <div className='cart-item__variant-title'>Single</div>
          </div>
          <div className='cart-item__content-row'>
            <div className='cart-item__quantity-container'>
              <button
                className='btn--seamless quantity-decrement'
                type='button'
                onClick={this.props.decrementQuantity}>
                <span>-</span>
              </button>
              <div
                className='cart-item__quantity'
                type='number'
                min='0'>
                {this.props.itemInfo.quantity}
              </div>
              <button
                className='btn--seamless quantity-increment'
                type='button'
                onClick={this.props.incrementQuantity}>
                <span>+</span>
              </button>
            </div>
            <span className='cart-item__price'>${this.props.itemInfo.line_price}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ShoppingCartItem;
