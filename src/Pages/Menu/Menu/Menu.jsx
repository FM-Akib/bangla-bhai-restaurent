import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuback from '../../../assets/menu/banner3.jpg';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

import dessertsCover from '../../../assets/menu/dessert-bg.jpeg'
import pizzaCover from '../../../assets/menu/pizza-bg.jpg'
import saladCover from '../../../assets/menu/salad-bg.jpg'
import soupCover from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item=> item.category==='dessert')
    const pizza = menu.filter(item=> item.category==='pizza')
    const salad = menu.filter(item=> item.category==='salad')
    const soup = menu.filter(item=> item.category==='soup')
    const offered = menu.filter(item=> item.category==='offered')
    return (
        <div>
            <Helmet>
            <title>Bangla Bhai | Menu</title>
            </Helmet>

            <Cover img={menuback} title='Our Menu' subtitle='BanglaWould you like to try a dish?'></Cover>
            <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={dessert} img={dessertsCover} title='dessert' subtitle='Life is short, eat dessert first.'></MenuCategory>

            <MenuCategory items={pizza} img={pizzaCover} title='pizza' subtitle='When life gives you lemons, sell them and buy pizza.'></MenuCategory>

            <MenuCategory items={salad} img={saladCover} title='salad' subtitle='Salad is the ultimate flexitarian meal.'></MenuCategory>

            <MenuCategory items={soup} img={soupCover} title='soup' subtitle='Good soup is one of the prime ingredients of good living.'></MenuCategory>
        
        
        
        </div>
    );
};

export default Menu;