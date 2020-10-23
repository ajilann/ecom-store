import React, {useState, useEffect} from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import {Link, useHistory} from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import Currencyformat from "react-currency-format";
import axios from './axios';


function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();
    
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded]= useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null); 
    const [disabled, setDisabled] = useState(true);
    const [ clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer

    const getClientSecret = async () => {
            const response = await axios({// axios is way of making post or get request
                method: 'post',
                //Stripe expects the total in a currencies submits
                url:`/payment/create?total=${getBasketTotal(basket) * 100}`
    
            });
            setClientSecret(response.data.clientSecret)
            }

    getClientSecret();
        
    }, [basket])

    const handleSubmit = async (event) => {
        // do all the stripe proces

        event.preventDefault();
        setProcessing(true);

         const payload = await stripe.confirmCardPayment(clientSecret, {
             payment_method: {
                 card: elements.getElement(CardElement)
             }
         }).then(({paymentIntent}) => {
             //paymentIntent = payment confirmation

             setSucceeded(true);
             setError(null)
             setProcessing(false)

             history.replace('/orders')
         })

    }
    
    const handleChange = event => {
            //we need to listen for changes in the CardElement 
            //and display any errors as the customer types their card details.

            setDisabled(event.empty);
            setError(event.error ? event.error.message: "");
        }

    return (
        <div className = 'payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>

                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                      <p>{user?.email}</p>  
                      <p>34423 address street</p>
                      <p>kerala, India</p>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe method of payment*/}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                        
                        <div className='payment__priceContainer'>
                            <Currencyformat
                            renderText={(value) => (
                                <>
                                <h3>Order Total: {value}</h3>
                                </>
                            )}
                            decimalScale= {2}
                            value={getBasketTotal(basket)}
                            displayType= {"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>

                        {/* error */}
                        {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
