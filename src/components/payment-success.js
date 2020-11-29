import React from 'react';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom'

class PaymentSuccess extends React.Component {


  onSubmit = () => {
         return  <Redirect  to="/items/" />
  }

  render() {
    return(
      <div className="container" id="successpage">
      <img src={process.env.PUBLIC_URL + '/success.png'} className="center" alt="success"/>
        <h1 className="title2">Congratulations!</h1>
        <h2 className="title2">Your order has been successfully placed.</h2>
        <Button variant="success" onClick={this.onSubmit} id="redirectbtn" size="lg">Go to Homepage</Button>
      </div>
    )
  }
}
export default PaymentSuccess;