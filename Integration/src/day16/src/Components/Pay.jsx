// Apply.jsx

import React from 'react';
import '../Style/Pay.css';
import { Link } from 'react-router-dom';


class Apply extends React.Component {
  render() {
    return (
      <PaymentForm />
    );
  }
}

class PaymentForm extends React.Component {
  render() {
    return (
      <div className="payment-bg">
        <div className="payment-fc">
          <form className="payment-f" action="#" method="POST">
            <fieldset>
              <h1>Payment Details</h1>
              <div className="payment-card">
                <input type="text" name="cardNumber" className="payment-card-number" placeholder="Card Number" required />
                <input type="text" name="cardHolder" className="payment-card-holder" placeholder="Card Holder" required />
                <input type="text" name="expiryDate" className="payment-expiry-date" placeholder="Expiry Date" required />
                <input type="text" name="cvv" className="payment-cvv" placeholder="CVV" required />
              </div>
              <br /><br /><Link to="/Apply">
              <input type="submit" name="submit" className="payment-su" /></Link>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Apply;
