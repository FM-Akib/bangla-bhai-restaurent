import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuback from '../../../assets/menu/banner3.jpg';

const Menu = () => {
    return (
        <div>
            <Helmet>
            <title>Bangla Bhai | Menu</title>
            </Helmet>

            <Cover img={menuback} title='Our Menu' subtitle='BanglaWould you like to try a dish?'></Cover>
            
        </div>
    );
};

export default Menu;