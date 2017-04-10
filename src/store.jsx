import React from 'react';
import ReactDOM from 'react-dom';

class OrderForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cardNumber: null,
      expMonth: null,
      expYear: null,
      cvc: null,
      token: null
    };
  }

  componentDidMount() {
    const stripe = Stripe('pk_test_qadX9aFJ22MpdYgR91pOzMVD');
    const elements = stripe.elements();

    const style = {
      base: {
        // Add base input styles here:
        fontSize: '16px',
        lineHeight: '24px',
      },
    };

    // Create an instance of the card Element
    const card = elements.create('card', {style});

    // Add an instance of the card Element into the `card-element` <div>
    card.mount('#card-element');

    // Displays errors
    card.addEventListener('change', ({error}) => {
      const displayError = document.getElementById('card-errors');
      if (error) {
        displayError.textContent = error.message;
      } else {
        displayError.textContent = '';
      }
    });

    // Create a token or display an error the form is submitted.
    const form = document.getElementById('payment-form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      stripe.createToken(card).then(function(result) {
        if (result.error) {
          // Inform the user if there was an error
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          // Send the token to your server
          stripeTokenHandler(result.token);
        }
      });
    });
  }

  render () {

    return (
      <div className='payment-form-container'>
        <h1>BYRD STORE</h1>
        <form id='payment-form'>
          <div className='payment-form-group'>
            <label className='payment-form-label'>
              <span>Name</span>
              <input name='cardholder-name' className='payment-form-field' placeholder='Jane Doe' />
            </label>
            <label className='payment-form-label'>
              <span>Phone</span>
              <input className='payment-form-field' placeholder='(123) 456-7890' type='tel' />
            </label>
            <label className='payment-form-label'>
              <span>Address</span>
              <input className='payment-form-field' placeholder='Street Address' />
            </label>
            <label className='payment-form-label'>
              <span>Zip</span>
              <input className='payment-form-field' placeholder='90210' />
            </label>
          </div>
          <div className='payment-form-group'>
            <label className='payment-form-label'>
              <span>Card</span>
              <div id='card-element' className='payment-form-field'></div>
            </label>
          </div>
          <button className='payment-submit-button' type='submit'>Pay $25</button>
          <div className='outcome'>
            <div className='error'></div>
            <div className='success'>
              Success! Your Stripe token is <span className='token'></span>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default OrderForm;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<OrderForm />, document.getElementById('store-container'));
});
