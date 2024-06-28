import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "./Checkoutform";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_PK);
const Payment = () => {
    return (
        <div>
        <SectionTitle heading="Payment" subHeading="Make payment!"></SectionTitle>
       
        <Elements stripe={stripePromise} >
          <Checkoutform></Checkoutform>
        </Elements>
       
        </div>
    );
};

export default Payment;