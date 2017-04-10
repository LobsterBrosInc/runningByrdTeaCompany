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
      token: null,
      name: "",
      email: "",
      streetAddress1: "",
      city: "",
      zip: ""
    };

    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const stripe = Stripe('pk_test_qadX9aFJ22MpdYgR91pOzMVD');
    const elements = stripe.elements();

    const style = {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        lineHeight: '40px',
        fontSize: '16px',

        '::placeholder': {
          color: '#CFD7E0',
        },
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

    // Create a token or display an error after the form is submitted.
    const form = document.getElementById('payment-form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      let extraDetails = {
        name: this.state.name
      }

      stripe.createToken(card, extraDetails).then(function(result) {
        if (result.error) {
          // Inform the user if there was an error
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          // Send the token to your server
          console.log(result.token);
          this.setState({token: result.token})
          console.log(this.state);
          stripeTokenHandler(result.token);
        }
      });
    });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render () {

    return (
      <div className='payment-form-container'>
        <h1>BYRD STORE</h1>
        <form id='payment-form'>
          <div className='payment-form-group'>
            <label className='payment-form-label'>
              <span>Name</span>
              <input
                name='cardholder-name'
                className='payment-form-field'
                placeholder='Jane Doe'
                onChange={this.update('name')} />
            </label>
            <label className='payment-form-label'>
              <span>E-mail</span>
              <input
                className='payment-form-field'
                placeholder='janedoe@gmail.com'
                type='email'
                onChange={this.update('email')} />
            </label>
            <label className='payment-form-label'>
              <span>Address</span>
              <input
                className='payment-form-field'
                placeholder='Street Address'
                onChange={this.update('streetAddress1')} />
            </label>
            <label className='payment-form-label'>
              <span>City</span>
              <input
                className='payment-form-field'
                placeholder='San Francisco'
                onChange={this.update('city')} />
            </label>
            <label className='payment-form-label'>
              <span>State</span>
              <input
                className='payment-form-field'
                placeholder='CA'
                onChange={this.update('state')} />
            </label>
          </div>
          <div className='payment-form-group'>
            <label className='payment-form-label'>
              <span>Card</span>
              <div id='card-element' className='payment-form-field'></div>
            </label>
          </div>
          <div className='outcome'>
            <div id='card-errors'></div>
            <div className='success'>
              Success! Your Stripe token is <span className='token'></span>
            </div>
          </div>
          <button className='payment-submit-button' type='submit'>Pay $25</button>
        </form>
      </div>
    )
  }
}

export default OrderForm;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<OrderForm />, document.getElementById('store-container'));
});
