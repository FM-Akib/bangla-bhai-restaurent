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

            <Cover img={dessertsCover} title='DESSERTS' subtitle='Life is short, eat dessert first.'></Cover>
            <MenuCategory items={dessert}></MenuCategory>

            <Cover img={pizzaCover} title='Pizza' subtitle='When life gives you lemons, sell them and buy pizza.'></Cover>
            <MenuCategory items={pizza}></MenuCategory>

            <Cover img={saladCover} title='salad' subtitle='Salad is the ultimate flexitarian meal.'></Cover>
            <MenuCategory items={salad}></MenuCategory>

            <Cover img={soupCover} title='soup' subtitle='Good soup is one of the prime ingredients of good living.'></Cover>
            <MenuCategory items={soup}></MenuCategory>
        
        
        
        </div>
    );
};

export default Menu;