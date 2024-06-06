import React, { useState } from 'react'
import Ratting from '../components/Ratting';
import { Link } from 'react-router-dom';
import { setItem } from 'localforage';

const title = "Our Products";

const ProductData = [
{
imgUrl: '/CategoryShowCase/01.jpg',
cate: 'Kitchen',
title: 'product 1',
author: 'assets/images/course/author/01.jpg',
brand: 'FAOU',
price: '$199.00',
id: 1,
},
{
imgUrl: '/CategoryShowCase/02.jpg',
cate: 'Kitchen',
title: 'product 2',
author: 'assets/images/course/author/02.jpg',
brand: 'FAOU',
price: '$199.00',
id: 2,
},
{
imgUrl: '/CategoryShowCase/03.jpg',
cate: 'Kitchen',
title: 'product 3',
author: '/categoryTab/brand/apple.png',
brand: 'FAOU',
price: '$199.00',
id: 3,
},
{
imgUrl: '/CategoryShowCase/04.jpg',
cate: 'Bags',
title: 'product 4',
author: 'assets/images/course/author/04.jpg',
brand: 'FAOU',
price: '$199.00',
id: 4,
},
{
imgUrl: '/CategoryShowCase/05.jpg',
cate: 'Bedroom',
title: 'product 5',
author: 'assets/images/course/author/05.jpg',
brand: 'FAOU',
price: '$199.00',
id: 5,
},
{
imgUrl: '/CategoryShowCase/06.jpg',
cate: 'Chair & Bar stools',
title: 'product 6',
author: 'assets/images/course/author/06.jpg',
brand: 'FAOU',
price: '$199.00',
id: 6,
},
{
imgUrl: '/CategoryShowCase/07.jpg',
cate: 'Chair & Bar stools',
title: 'product 7 ',
author: 'assets/images/course/author/01.jpg',
brand: 'FAOU',
price: '$199.00',
id: 7,
},
{
imgUrl: '/CategoryShowCase/08.jpg',
cate: 'Home Decor',
title: 'product 8',
author: 'assets/images/course/author/02.jpg',
brand: 'FAOU',
price: '$199.00',
id: 8,
},
]


const CategoryShowCase = () => {
    const [items,setItems] = useState(ProductData)

    // Category baded filtering
    const FilterItem=(categItem)=>{
        const updateItems=ProductData.filter((curElem)=>{
            return curElem.cate===categItem;
        })
        setItems(updateItems)
    }
  return (
    <div className='course-section style-3 padding-tb'>
        {/* shapes */}
        <div className='course-shape one'><img src="/CategoryShowCase/04.jpeg" alt="" height="161" width="256" /></div>
        <div className='course-shape two'><img src="/CategoryShowCase/04.jpeg" alt="" height="150" width="190" /></div>

        {/* main section */}
        <div className='container'>
            {/*section header */}
            <div className='section-header'>
                <h2 className='title'>{title}</h2> 
                <div className='course-filter-group'>
                    <ul className='lab-ul'>
                        <li onClick={()=>setItems(ProductData)}>All</li>
                        <li onClick={()=>FilterItem("Bedroom")}>Bedroom</li>
                        <li onClick={()=>FilterItem("Kitchen")}>Kitchen</li>
                        <li onClick={()=>FilterItem("Chair & Bar stools")}>Chair & Bar stools</li>
                        <li onClick={()=>FilterItem("Sofas and Armchairs")}>Sofas and Armchairs</li>
                        <li onClick={()=>FilterItem("Home Decor")}>Home Decor</li>
                    </ul>
                </div>
            </div>

            {/*section body */}
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
                    {
                        items.map((product=><div key={product.id} className='col'>
                            <div className='course-item style-4'>
                                <div className='course-inner'>
                                    <div className='course-thumb'>
                                        <img src={product.imgUrl} alt="" />
                                        <div className='course-category'>
                                            <div className='course-cate'>
                                                <a href="#">{product.cate}</a>
                                            </div>
                                            <div className='course-review'>
                                                <Ratting/>
                                            </div>

                                        </div>
                                    </div>

                                    {/* content */}
                                    <div className='course-content'>
                                        <Link to={`/product/${product.id}`}><h6>{product.title}</h6></Link>
                                        <div className='course-footer'>
                                            <div className='course-author'>
                                                <Link to='/' className='ca-name'>{product.brand}</Link>
                                            </div>
                                            <div className='course-price'>
                                                {product.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>))
                    }
                </div>

            </div>
        </div>
    </div>
  )
}

export default CategoryShowCase