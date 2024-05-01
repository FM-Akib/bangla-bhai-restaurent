import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkoutform = () => {

    const stripe = useStripe();
    const elements = useElements();
  
    const [errorMessage, setErrorMessage] = useState(null);
    const {user} = useContext(AuthContext);
  

//TODO: Use Effect with intent 

   const [clientSecret,setClientSecret] = useState('');
   const [transactionId,setTransactionId] = useState(null)
   const [cart] = useCart();
   const axiosSecure = useAxiosSecure();
   const totalPrice = cart?.reduce((total,item)=>total+item.price,0)


   if(totalPrice>0){
    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price:totalPrice})
        .then(res=>{
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure,totalPrice])
   }




    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        return;
      }
  
      const card = elements.getElement(CardElement)
      if(card===null) {return;}

       // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (error) {
        console.log('[error]', error);
        setErrorMessage(error.message);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setErrorMessage('')
      }
      


      const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || 'anonymus',
              name: user?.displayName || 'anonymus',
            },
          },
        },
      );

      if(confirmError)console.log(confirmError);
      else{
        if(paymentIntent.status==='succeeded'){
            setTransactionId(paymentIntent.id)
        }
      }

    };
  
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className="btn btn-primary my-6 "disabled={!stripe || !clientSecret }>
          Pay
        </button>
        <p className="text-red-600"> {errorMessage}</p>
        {
            transactionId && <p className="text-emerald-600">Your Transaction Id {transactionId}</p>
        }
      </form>
    );
};

export default Checkoutform;