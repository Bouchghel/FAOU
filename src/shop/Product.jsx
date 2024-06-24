import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import Data from '../products.json';
import ProductCards from './ProductCards';
import Pagination from './Pagination';

const Product = () => {
    const [GridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const leftColumnRef = useRef(null);
    const [leftColumnHeight, setLeftColumnHeight] = useState(0);

    useEffect(() => {
        if (leftColumnRef.current) {
            setLeftColumnHeight(leftColumnRef.current.clientHeight);
        }
    }, [currentProducts]);

    return (
        <div>
            <PageHeader title="Product Page" curPage="Products" />
            <style jsx>{`
                .image-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: ${leftColumnHeight}px;
                }
                .full-height-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            `}</style>
            <div className='shop-page padding-tb'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12" ref={leftColumnRef}>
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length} Results</p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                        <a className='grid' onClick={() => setGridList(true)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list' onClick={() => setGridList(false)}>
                                            <i className='icofont-listine-dots'></i>
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <ProductCards GridList={GridList} products={currentProducts} />
                                </div>

                                <Pagination
                                    productsPerPage={productsPerPage}
                                    totalProducts={products.length}
                                    paginate={paginate}
                                    activePage={currentPage}
                                />
                            </article>
                        </div>
                        <div className="col-lg-4 col-12 image-container">
                            <img src='/image-dep/rightSide.jpg' alt='' className='full-height-image'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
