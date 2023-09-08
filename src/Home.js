import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "reactstrap";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="HomeSec1">
        <Swiper className="mySwiper">
          <SwiperSlide>
            <img src="images/711Y9Al9RNL._SX3000_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71qid7QFWJL._SX3000_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61jovjd+f9L._SX3000_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61DUO0NqyyL._SX3000_.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
        <Container fluid className="firstcat">
          <Row>
            <Col lg="3" md="3" sm="12" className="flexCol">
              <div>
                <p>Gaming accessories</p>
                <Link to="/Shop/Gaming accessories">
                  <div className="d-flex">
                    <img
                      src="/images/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
                      alt=""
                    />
                    <img
                      src="/images/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <img
                      src="/images/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
                      alt=""
                    />
                    <img
                      src="/images/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
                      alt=""
                    />
                  </div>
                </Link>
                <Link to="/Shop/Gaming accessories">Shop Now</Link>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div>
                <p>Electronics</p>
                <Link to="/Shop/Electronics">
                  <div>
                    <img
                      src="/images/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                      alt=""
                    />
                  </div>
                </Link>
                <Link to="/Shop/Electronics">Shop Now</Link>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div>
                <p>Health & Personal Care</p>
                <Link to="/Shop/Health & Personal Care">
                  <div>
                    <img
                      src="/images/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
                      alt=""
                    />
                  </div>
                </Link>
                <Link to="/Shop/Health & Personal Care">Shop Now</Link>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div>
                <p>AmazonBasics</p>
                <Link to="/Shop/AmazonBasics">
                  <div>
                    <img
                      src="/images/amazonbasics_520x520._SY304_CB442725065_.jpg"
                      alt=""
                    />
                  </div>
                </Link>
                <Link to="/Shop/AmazonBasics">Shop Now</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="categorySec">
        <Container fluid>
          <Row>
            <Col lg="3" md="3" sm="12">
              <div>
                <p>Deal of the Day</p>
                <Link to="/Shop/Deal of the Day">
                  <div>
                    <img src="/images/41cQAxi06hL._AC_SY230_.jpg" alt="" />
                  </div>
                </Link>
                <br />
                <Link to="/Shop/Deal of the Day">Shop Now</Link>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div>
                <p>Find your ideal TV</p>
                <Link to="/Shop/Find your ideal TV">
                  <div>
                    <img
                      src="/images/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                      alt=""
                    />
                  </div>
                </Link>
                <Link to="/Shop/Find your ideal TV">Shop Now</Link>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12" className="flexCol">
              <div>
                <p>Comfy styles for her</p>
                <Link to="/Shop/Comfy styles for her">
                  <div className="d-flex">
                    <img
                      src="/images/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg"
                      alt=""
                    />
                    <img
                      src="/images/Fuji_Dash_WomenFashion_Joggers_Quad_Cat_1x._SY116_CB418608748_.jpg"
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <img
                      src="/images/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_1x._SY116_CB418608722_.jpg"
                      alt=""
                    />
                    <img
                      src="/images/Fuji_Dash_WomenFashion_Tees_Quad_Cat_1x._SY116_CB418608878_.jpg"
                      alt=""
                    />
                  </div>
                </Link>
                <Link to="/Shop/Comfy styles for her">Shop Now</Link>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div>
                <p>Shop activity trackers and smartwatches</p>
                <Link to="/Shop/Shop activity trackers and smartwatches">
                  <div>
                    <img
                      src="/images/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
                      alt=""
                    />
                  </div>
                </Link>
                <Link to="/Shop/Shop activity trackers and smartwatchesr">
                  Shop Now
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sliderSec">
        <Swiper slidesPerView={7} spaceBetween={30} className="mySwiper">
          <SwiperSlide>
            <img src="images/71HYKF4rO9L._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/51YLbkYOhlL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61-PblYntsL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/717VgTTRKXL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81iJG2js5-S._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81qKst2CMOL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81N4N3CyByL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81G1qFsRHDL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71I1bnzOg8L._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61drpi3cYUL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71NBQ2a52CL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/91vyVfjkQzS._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71QMkXmLVCL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81JulKoOyLL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="images/61JvACIik9L._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61obOhi+WOL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="images/81gJUSx-TjL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/810o-i5jpiL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71SfFWK2AUL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61IYYoZ66VL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="images/81tdRcle46L._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
        <Swiper slidesPerView={7} spaceBetween={30} className="mySwiper">
          <SwiperSlide>
            <img src="images/81Il298A2BL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/91YKVfaKDsL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61NVod4lO3L._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71BYGwotlJL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/51gIBBYlqNL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/819e1LTAPVL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81Y5-Yyg3qS._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/51bKQyVILmL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71N6J+V-eDL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81A40fe4mtL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/812CJhz2AnL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/7111H23ev8S._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81Jg8HF-N1L._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/818URnZVCEL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71mFlnayRML._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71tjzN4QkCL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/91axMSitGAL._AC_SY200_ (1).jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/7101gt2t3aL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61Ti0ySjvzL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/51AX-CcnIdL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61clCnUocLL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71HR1CNMdpL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="categorySec2">
        <Container fluid>
          <Row>
            <Col lg="3" md="3" sm="12">
              <div>
                <p>For your Fitness Needs</p>
                <Link to="/Shop/For your Fitness Needs">
                  <div>
                    <img
                      src="/images/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
                      alt=""
                    />
                  </div>
                </Link>
                <Link to="/Shop/For your Fitness Needs">Shop Now</Link>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div>
                <p>New arrivals in Toys</p>
                <Link to="/Shop/New arrivals in Toys">
                  <div>
                    <img
                      src="/images/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"
                      alt=""
                    />
                  </div>
                </Link>
                <Link to="/Shop/New arrivals in Toys">Shop Now</Link>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div>
                <p>International top sellers in Home</p>
                <Link to="/Shop/International top sellers in Home">
                  <div>
                    <img src="/images/718QckZBsGL._AC_SY195_.jpg" alt="" />
                  </div>
                </Link>
                <Link to="/Shop/International top sellers in Home">
                  Shop Now
                </Link>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div>
                <p>Create with strip lights</p>
                <Link to="/Shop/Create with strip lights">
                  <div>
                    <img
                      src="/images/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
                      alt=""
                    />
                  </div>
                </Link>
                <Link to="/Shop/Create with strip lights">Shop Now</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sliderSec">
        <Swiper slidesPerView={7} spaceBetween={30} className="mySwiper">
          <SwiperSlide>
            <img src="images/71HYKF4rO9L._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/51YLbkYOhlL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61-PblYntsL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/717VgTTRKXL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81iJG2js5-S._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81qKst2CMOL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81N4N3CyByL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81G1qFsRHDL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71I1bnzOg8L._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61drpi3cYUL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71NBQ2a52CL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/91vyVfjkQzS._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71QMkXmLVCL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81JulKoOyLL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="images/61JvACIik9L._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61obOhi+WOL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="images/81gJUSx-TjL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/810o-i5jpiL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71SfFWK2AUL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61IYYoZ66VL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="images/81tdRcle46L._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
        <Swiper slidesPerView={7} spaceBetween={30} className="mySwiper">
          <SwiperSlide>
            <img src="images/81Il298A2BL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/91YKVfaKDsL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61NVod4lO3L._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71BYGwotlJL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/51gIBBYlqNL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/819e1LTAPVL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81Y5-Yyg3qS._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/51bKQyVILmL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71N6J+V-eDL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81A40fe4mtL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/812CJhz2AnL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/7111H23ev8S._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/81Jg8HF-N1L._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/818URnZVCEL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71mFlnayRML._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71tjzN4QkCL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/91axMSitGAL._AC_SY200_ (1).jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/7101gt2t3aL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61Ti0ySjvzL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/51AX-CcnIdL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/61clCnUocLL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/71HR1CNMdpL._AC_SY200_.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
