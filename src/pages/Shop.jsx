import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import ShopItems from './ShopItems';
import { MyStore } from '../Context/MyContext';

const Shop = () => {

    const { products } = useContext(MyStore);
    return (
        <ShopItems products={products} />
    );
};

export default Shop;