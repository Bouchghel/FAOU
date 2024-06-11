import React from 'react'
import { Link } from 'react-router-dom';

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
{
imgUrl: '/HomeCategory/01.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-bed',
title: 'Bedroom',
},
{
imgUrl: '/HomeCategory/02.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-dining-table',
title: 'Kitchen',
},
{
imgUrl: '/HomeCategory/03.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-expand',
title: 'Decorative',
},
{
imgUrl: '/HomeCategory/04.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-chair',
title: 'Chair & Bar stools',
},
{
imgUrl: '/HomeCategory/05.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Sofas and Armchairs',
},
{
imgUrl: '/HomeCategory/06.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-ui-home',
title: 'Home Decor',
},
]


function HomeCategory() {
  return (
    <div className='category-section style-4 padding-tb'>
        <div className='container'>

            {/*section header*/}
            <div className='section-header text-center'>
                <span className='subtitle'>{subTitle}</span>
                <h2 className='title'>{title}</h2>
            </div>

            {/*section card*/}
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                    {
                        categoryList.map((val,i)=>(<div key={i} className='col'>
                            <Link to="/" className='category-item'>
                                <div className='category-inner'>
                                    {/* image thumbnail*/}
                                    <div className='category-thumb'>
                                        <img src={val.imgUrl} alt=''/>
                                    </div>

                                    {/*content */}
                                    <div className='category-content'>
                                        <div className='cate-icon'>
                                            <i className={val.iconName}></i>
                                        </div>
                                        <Link to='/'><h6>{val.title}</h6></Link>

                                    </div>
                                </div>
                            </Link>
                            </div>))
                    }
                </div>
                <div className='text-center mt-5'>
                    <Link to='/' className='lab-btn'><span>{btnText}</span></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCategory