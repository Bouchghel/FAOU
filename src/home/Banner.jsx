import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

const ImageList = [
    {
        imageUrl: "src/assets/images/bg-img/15.jpg"
    },
    {
        imageUrl: "src/assets/images/bg-img/19.jpg"
    },
    {
        imageUrl: "src/assets/images/bg-img/20.jpg"
    },
];

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            {ImageList.map((item, index) => (
                <SwiperSlide key={index}>
                    <img src={item.imageUrl} alt={`Slide ${index}`} style={{ width: '100%', height: '650px', objectFit: 'cover' }} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Banner;

    

    {/* this code with research bar : 
        import React, { useState } from 'react'
import productData from "../products.json"
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';

const title=(
    <h2>Search Your On From Thouzand of Products</h2>
)

const desc="We Have The Largest Collection Of Products"

const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];

const Banner = () => {
    const[searchInput,setSearchInput]=useState("");
    const[fileredProducts,setfilteredProducts]=useState(productData);

    // Search Functionality
    const handleSearch = e =>{
        const searchTerm=e.target.value;
        setSearchInput(searchTerm);

    //filtering products based on search
    const filtered=productData.filter((prodcut)=>prodcut.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
    setfilteredProducts(filtered);
    
    }
  return (
    <div className='banner-section style-4'>
        <div className='container'>
            <div className='banner-content'>
                {title}
                <form>
                    <SelectedCategory select={"all"}></SelectedCategory>
                    <input type='text' name='search' id='search' placeholder='Search Your Product' value={searchInput} onChange={handleSearch}></input>
                    <button type='submit'>
                        <i className='icofont-search'></i>
                    </button>
                </form>
                <p>{desc}</p>
                <ul className='lab-ul'>
                    {
                        searchInput && fileredProducts.map((product,i)=>
                        <li key={i}>
                            <Link to={`/product/${product.id}`}>{product.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Banner */}