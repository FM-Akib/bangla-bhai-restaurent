import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <>
         <SectionTitle 
           heading= 'Order online'
           subHeading='From 11:00am to 10:00pm'
           ></SectionTitle>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h1 className="md:md:text-4xl text-lg font-semibold uppercase -mt-20 text-center text-white">Salads</h1>
            </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" />
        <h1 className="md:text-4xl text-lg font-semibold uppercase -mt-20 text-center text-white">Soups</h1>
        </SwiperSlide>

        <SwiperSlide>
            <img src={img3} alt="" />
            <h1 className="md:text-4xl text-lg font-semibold uppercase -mt-20 text-center text-white">pizzas</h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <h1 className="md:text-4xl text-lg font-semibold uppercase -mt-20 text-center text-white">desserts</h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <h1 className="md:text-4xl text-lg font-semibold uppercase -mt-20 text-center text-white">Salads</h1>
            </SwiperSlide>
      </Swiper>
            
        </>
    );
};

export default Category;