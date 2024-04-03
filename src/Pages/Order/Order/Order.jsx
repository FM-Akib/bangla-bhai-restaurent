import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import orderimg from "../../../assets/shop/banner2.jpg";

const Order = () => {
    return (
        <div>
             <Helmet>
            <title>Bangla Bhai | Order</title>
            </Helmet>

            <Cover img={orderimg} title='OUR SHOP' subtitle='Would you like to try a dish?'></Cover>


        </div>
    );
};

export default Order;