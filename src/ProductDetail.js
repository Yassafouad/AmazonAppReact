import React, { useEffect, useState } from 'react'
import products from './products.json';
import { useParams } from 'react-router-dom';
import { BsFillStarFill } from "react-icons/bs"
import { Container, Row, Col } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from "swiper";
import useStateValue from "./StateProvider"
import Footer from './Footer';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

function ProductDetail() {
    const [{ basket }, dispatch] = useStateValue()
    let { id } = useParams()
    const product = products.find(item => item.id == id);

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                rating: product.rating
            }
        })
    }
    return (

        <div className='detaill'>
            <Container fluid>
                <Row>
                    <Col md="6" sm="12">
                    <div className='secccc'>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                    <img src={product.image} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={product.image2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={product.image3}  alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={product.image4}  alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={product.image5}  alt=""/>
                    </SwiperSlide>


                </Swiper>
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={product.image}  alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={product.image2}  alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={product.image3}  alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={product.image4}  alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={product.image5}  alt=""/>
                    </SwiperSlide>

                </Swiper>
                </div>
                    </Col>
                    <Col md="6" sm="12" className='productDetail'>
                        <div>
                            <h3> {product.title}</h3>
                            <div>
                                {Array(product.rating).fill().map((_, i) => (
                                    <BsFillStarFill />
                                ))}
                            </div>
                            <p>price:<span>{product.price}</span></p>
                            <button onClick={addToBasket}>Add To Basket</button>
                        </div>
                    </Col>

                </Row>
            </Container>

            <Footer />

        </div>
    )
}

export default ProductDetail