import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import orderimg from "../../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";

const Order = () => {
    const [tabIndex,setTabindex] = useState(0);
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
            <TabPanel>a</TabPanel>
            <TabPanel>b</TabPanel>
            <TabPanel>c</TabPanel>
            <TabPanel>d</TabPanel>
            <TabPanel>e</TabPanel>
            </Tabs>


        </div>
    );
};

export default Order;