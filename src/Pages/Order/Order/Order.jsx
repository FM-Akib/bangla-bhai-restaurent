import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import orderimg from "../../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drinks']
    const [menu] = useMenu();
    const {category} = useParams();
    console.log(category);

    const initialIndex = categories.indexOf(category)


    const dessert = menu.filter(item=> item.category==='dessert')
    const pizza = menu.filter(item=> item.category==='pizza')
    const salad = menu.filter(item=> item.category==='salad')
    const soup = menu.filter(item=> item.category==='soup')
    const drinks = menu.filter(item=> item.category==='drinks')


    const [tabIndex,setTabindex] = useState(initialIndex);

    return (
        <div>
             <Helmet>
            <title>Bangla Bhai | Order</title>
            </Helmet>

            <Cover img={orderimg} title='OUR SHOP' subtitle='Would you like to try a dish?'></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
           <div className="my-10 flex justify-center uppercase font-semibold">
           <TabList >
                <Tab>Salad</Tab>
                <Tab>pizza</Tab>
                <Tab>soups</Tab>
                <Tab>desserts</Tab>
                <Tab>drinks</Tab>
            </TabList>
           </div>
            <TabPanel>
                <OrderTab item={salad}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab item={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab item={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab item={dessert}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab item={drinks}></OrderTab>
            </TabPanel>
            </Tabs>


        </div>
    );
};

export default Order;